
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DeleteCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
export const handler = async (event) => {

  let response = {};
  try {
    const client = new DynamoDBClient({});
    const docClient = DynamoDBDocumentClient.from(client);
    const { id } = event.queryStringParameters;
    const command = new DeleteCommand({
      TableName: "Products",
      Key: {
        id
      }
    });

    let data = await docClient.send(command);
    response = {
      isBase64Encoded: false,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 201,
    };
  } catch (error) {
    response = {
      isBase64Encoded: false,
      body: JSON.stringify(error),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 401,
    };
  }
  return response;
};
