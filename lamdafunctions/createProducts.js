import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";


const parseBase64 = (data) => {
  console.log(data)
  const format = data.substring(data.indexOf('data:') + 5, data.indexOf(';base64'));
  const base64String = data.replace(/^data:image\/\w+;base64,/, '');
  const Body = Buffer.from(base64String, 'base64');
  return { format, Body }
}
export const handler = async (event) => {
  let response = {};
  try {
    const { body } = event;
    const parseBody = JSON.parse(body)
    const TableName = "Products";
    const Bucket = "plerion-products"
    const client = new DynamoDBClient({});
    const s3client = new S3Client({});
    const docClient = DynamoDBDocumentClient.from(client);
    const { format, Body } = parseBase64(parseBody.image_url);
    const rand = parseInt((Math.random() * 10000000000000000000)).toString(36);
    const Key = `${rand}-${parseBody.meta.filename}`;
    const s3command = new PutObjectCommand({
      Bucket,
      Key,
      Body,
      ContentEncoding: 'base64',
      ContentType: format,
    });
    const [_res, region] = await Promise.all([
      s3client.send(s3command),
      s3client.config.region(),
    ]);
    parseBody.image_url = `https://${Bucket}.s3.${region}.amazonaws.com/${Key}`
    delete parseBody.meta
    const command = new PutCommand({
      TableName,
      Item: parseBody,
    });
    let result = await docClient.send(command);
    response = {
      isBase64Encoded: false,
      body: JSON.stringify(result),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
    };
  } catch (error) {
    console.log(error)
    response = {
      isBase64Encoded: false,
      statusCode: 401,
      body: JSON.stringify(error),
    }
  }
  return response;
};
