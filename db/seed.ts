import { db, Comment } from "astro:db";

export default async function () {
  await db.insert(Comment).values([
    { author: "Queen", content: "Hope you like Astro DB!" },
    { author: "Captain", content: "Enjoy!" },
  ]);
}
