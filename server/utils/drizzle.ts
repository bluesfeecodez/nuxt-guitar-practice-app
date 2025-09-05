import { drizzle } from "drizzle-orm/libsql";
import * as schema from "../database/schema";
import { createClient } from "@libsql/client";

// You can specify any property from the libsql connection options
export const useDrizzle = () => {
  const client = createClient({ url: "file:db.sqlite" });
  const db = drizzle({ client, schema: schema });
  return db;
};

export type User = typeof schema.users.$inferSelect;
export type UserDto = typeof schema.users.$inferInsert;
