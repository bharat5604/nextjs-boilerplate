import { loadEnvironment, setupSecretValues } from "./environment";

// Environment Variables
export const loadEnvVariables = async () => {
  // logger
  try {
    await setupSecretValues();
    const config = loadEnvironment();
    console.log("loadEnvironment=============", config)
        return config;
  } catch (err) {
    process.exit(0);
  }
};
