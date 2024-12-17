import type { Config } from 'drizzle-kit';

// @ts-ignore
export default {
  out: './migrations',
  schema: './database/schemas/*',
  dialect: 'sqlite',
  driver: 'd1-http',
  dbCredentials: {
    databaseId: process.env.DATABASE_ID!,
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    token: process.env.CLOUDFLARE_TOKEN!,
  },
} satisfies Config;
