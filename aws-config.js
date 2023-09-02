import AWS from "aws-sdk";

const client = new AWS.SecretsManager({
  region: "your-region",
});

export async function getSecret() {
  const { SecretString } = await client
    .getSecretValue({
      SecretId: "my-secret",
    })
    .promise();

  return SecretString;
}
