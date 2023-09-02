
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
export const handler = async (event) => {

  let response = {};
  try {
    const client = new DynamoDBClient({});
    const docClient = DynamoDBDocumentClient.from(client);
    let data = {
      id: "123",
      name: "test-product",
      description: "Lorem ipsum ",
      price: "250.00",
      image_url: "https://google.com"
    };

    const command = new PutCommand({
      TableName: "Products",
      Item: data
    });

    await docClient.send(command);
    response = {
      statusCode: 201,
      message: "Product added succesfully",
      body: data,
    };
  } catch (error) {
    response = {
      statusCode: 401,
      error,
    }
  }

  return response;
};
