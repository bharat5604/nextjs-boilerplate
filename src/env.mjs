import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    // DATABASE_URL: z.string(),
    NODE_ENV: z.enum(["development", "test", "production"]),
    // BASE_URI: z.string(),
    // CLERK_SECRET_KEY: z.string(),
    // RESEND_API_KEY: z.string(),
    // EMAIL_FROM_ADDRESS: z.string().email(),
    // UPLOADTHING_SECRET: z.string(),
    // UPLOADTHING_APP_ID: z.string(),
    // STRIPE_API_KEY: z.string(),
    // STRIPE_WEBHOOK_SECRET: z.string(),
    // STRIPE_STD_MONTHLY_PRICE_ID: z.string(),
    // STRIPE_PRO_MONTHLY_PRICE_ID: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
    BASE_URI: z.string().url(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,
    BASE_URI: process.env.BASE_URI,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
