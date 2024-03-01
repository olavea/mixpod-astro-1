import { comments, episodes, playlists } from "./schema.ts";

export type Comment = typeof comments.$inferInsert;
export type Playlist = typeof playlists.$inferInsert;
export type Episode = typeof episodes.$inferInsert;
