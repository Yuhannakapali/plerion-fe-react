
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { ScanCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
export const handler = async (event) => {
  let response = {};
  try {
    const client = new DynamoDBClient({});
    const docClient = DynamoDBDocumentClient.from(client);

    const command = new ScanCommand({
      TableName: "Products",
    });

    let data = await docClient.send(command);

    response = {
      isBase64Encoded: false,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
    };
  } catch (error) {
    response = {
      statusCode: 401,
      error,
    }
  }
  return response;
};
