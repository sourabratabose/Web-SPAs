import { drizzle } from "drizzle-orm/bun-sql";
import * as schema from "./schema";
import { postgres } from "bun";

// Create postgres driver client
const client = new postgres(process.env.DB_URL!);

// Create drizzle query client
const db = drizzle({ client, logger: true, schema });

export default db;
