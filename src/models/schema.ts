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
  createdBy: text("createdBy"),
});

export const episodes = sqliteTable("episodes", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  audio: text("audio").notNull(),
});
