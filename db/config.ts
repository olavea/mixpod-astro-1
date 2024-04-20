import { defineDb, defineTable, column } from "astro:db";

const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    author: column.text({ optional: true }),
    content: column.text({ optional: true }),
  },
});

export default defineDb({
  tables: { Comment },
});
