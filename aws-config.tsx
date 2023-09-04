import AWS from "aws-sdk";
import { IAWSConfig } from "./src/aws.config.interface";
AWS.config.logger = console;
export class KeyVaultService {
  private awsKeyVault: AWS.SecretsManager;

  constructor(awsConfig: IAWSConfig) {
    this.awsKeyVault = new AWS.SecretsManager({
      accessKeyId: awsConfig.accessKeyId,
      secretAccessKey: awsConfig.secretAccessKey,
      region: awsConfig.region,
      signatureVersion: "v4",
    });
  }

  public async getSecretValue(key: string): Promise<string | undefined> {
    try {
      return (
        await this.awsKeyVault.getSecretValue({ SecretId: key }).promise()
      ).SecretString;
    } catch (error) {
      console.log("aws===========================>", error);
      // Logger.error(error);
    }
  }
}
