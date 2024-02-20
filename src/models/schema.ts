import { sql } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const comments = sqliteTable("comments", {
  id: integer("id").primaryKey(),
  author: text("author").notNull(),
  content: text("content").notNull(),
});

export const playlists = sqliteTable("playlists", {
  id: integer("id", { mode: "number" }).primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  createdBy: text("created_by"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});
