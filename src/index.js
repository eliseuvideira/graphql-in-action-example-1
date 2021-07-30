const { graphql } = require("graphql");
const { rootValue } = require("./rootValue");
const { schema } = require("./schema");

const executeGraphQLRequest = async (request) => {
  const response = await graphql(schema, request, rootValue);

  return response;
};

const main = async () => {
  const response = await executeGraphQLRequest(process.argv[2]);

  if (response.errors) {
    console.error(response.errors);
  } else {
    console.log(response.data);
  }
};

main();
