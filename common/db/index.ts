import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { env } from "@/common/env";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import * as schema from "./schemas";

const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });
