import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  avatar: text("avatar").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const journalEntry = sqliteTable("journal_entries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull(),
  backingtrackId: integer("backingtrack_id").notNull(),
  title: text("title").notNull(),
  body: text("body"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const backingTrack = sqliteTable("backgingtracks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  url: text("url").notNull().unique(),
  key: text("text"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
