import { defineDb, defineTable, column } from "astro:db";

const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    author: column.text({ optional: true }),
    content: column.text({ optional: true }),
  },
});

const Playlist = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    description: column.text({ optional: true }),
    createdBy: column.text({ optional: true }),
  },
});

const Episode = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    description: column.text({ optional: true }),
    audio: column.text(),
  },
});

const PlaylistEpisode = defineTable({
  columns: {
    playlistId: column.number({
      references: () => Playlist.columns.id,
    }),
    episodeId: column.text({
      references: () => Episode.columns.id,
    }),
  },
});

export default defineDb({
  tables: { Comment, Playlist, Episode, PlaylistEpisode },
});
