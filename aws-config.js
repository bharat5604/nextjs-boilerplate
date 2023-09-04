import AWS from "aws-sdk";

const client = new AWS.SecretsManager({
  region: "your-region",
});

export async function getSecret() {
  const { SecretString } = await client
    .getSecretValue({
     // SecretId: "my-secret",
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
      region: process.env.AWS_REGION || "",
    })
    .promise();

  return SecretString;
}
