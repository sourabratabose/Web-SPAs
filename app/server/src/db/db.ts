import { drizzle } from "drizzle-orm/bun-sql";
import { postgres } from "bun";

// Create postgres driver client
const client = new postgres(process.env.DATABASE_URL!);

// Create drizzle query client
const db = drizzle({ client });

export default db;