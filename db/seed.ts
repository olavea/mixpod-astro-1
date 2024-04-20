import { db, comments } from "astro:db";

export default async function () {
  await db.insert(comments).values([
    { author: "Queen", content: "Hope you like Astro DB!" },
    { author: "Captain", content: "Enjoy!" },
  ]);
}
