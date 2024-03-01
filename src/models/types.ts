import type { InferSelectModel } from "drizzle-orm";
import { comments, playlists } from "./schema.ts";

export type Comment = InferSelectModel<typeof comments>;
export type Playlist = typeof playlists.$inferInsert;
