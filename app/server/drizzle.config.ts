import { defineConfig } from "drizzle-kit";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

export default defineConfig({
  out: "./db/drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}\:${DB_PORT}/${DB_NAME}`,
  },
  verbose: true,
  strict: true,
});
