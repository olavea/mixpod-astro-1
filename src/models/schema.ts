import {
  text,
  sqliteTable,
  integer,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

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
});

export const playlistsRelations = relations(playlists, ({ many }) => ({
  playlistToEpisodes: many(episodesPlaylists),
}));

export const episodes = sqliteTable("episodes", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  audio: text("audio").notNull(),
});

export const episodesRelations = relations(episodes, ({ many }) => ({
  episodeToPlaylists: many(episodesPlaylists),
}));

export const episodesPlaylists = sqliteTable(
  "playlists_episodes",
  {
    playlistId: integer("playlist_id")
      .notNull()
      .references(() => playlists.id),
    episodeId: text("episode_id")
      .notNull()
      .references(() => episodes.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.playlistId, t.episodeId] }),
  }),
);

export const playlistsEpisodesRelations = relations(
  episodesPlaylists,
  ({ one }) => ({
    playlist: one(playlists, {
      fields: [episodesPlaylists.playlistId],
      references: [playlists.id],
    }),
    episode: one(episodes, {
      fields: [episodesPlaylists.episodeId],
      references: [episodes.id],
    }),
  }),
);
