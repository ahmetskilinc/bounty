import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as authSchema from "./schema/auth";
import * as bountiesSchema from "./schema/bounties";
import * as profilesSchema from "./schema/profiles";
import * as betaApplicationsSchema from "./schema/beta-applications";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

export const db = drizzle(pool, {
  schema: {
    ...authSchema,
    ...bountiesSchema,
    ...profilesSchema,
    ...betaApplicationsSchema,
  },
});

// Export all schemas
export * from "./schema/auth";
export * from "./schema/bounties";
export * from "./schema/profiles";
export * from "./schema/beta-applications";
