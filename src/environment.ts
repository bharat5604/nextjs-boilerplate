// import { Environment } from "@src/polyfils/interface";
// import { KeyVaultService } from "@src/utils/key.vault.service";

import { KeyVaultService } from "../aws-config"
let webAppUrl: string | undefined="WEB_APP_URL";
// let sendGridAccessKey: string | undefined;

const appEnv: string = process.env.APP_ENV || "DEV";


export async function setupSecretValues() {
  try {
    const keyVaultService = new KeyVaultService({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
      region: process.env.AWS_REGION || "",
    });

   
    //Preparing Async Calls for Getting Secret Values
    const asyncCalls: Promise<string | undefined>[] = [
     
      keyVaultService.getSecretValue(appEnv + "_WEB_APP_URL"),
    ];
    

    const [
      
      WebAppUrl,

    ] = await Promise.all(asyncCalls);
    
    webAppUrl = WebAppUrl;
    
  } catch (error) {
    console.error(error);
  }
}


export function loadEnvironment(): any {
  try {
    return {

      WEB_APP_URL: webAppUrl,
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
