import { db, Comment, Playlist, Episode, PlaylistEpisode } from "astro:db";

export default async function () {
  await db.insert(Comment).values([
    { author: "Queen", content: "Hope you like Astro DB!" },
    { author: "Captain", content: "Enjoy!" },
  ]);

  await db.insert(Playlist).values([
    {
      id: 1,
      name: "Queen's Playlist",
      description: "Hope you like Astro DB!",
      createdBy: "Queen",
    },
    { id: 2, name: "Captain's Playlist", createdBy: "Captain Ola" },
  ]);

  await db.insert(Episode).values([
    {
      id: "7afc54fd90c24aabb7aaae7b989828f6",
      title: "607: Astro Launches an Integrated Database",
      description:
        "<h2>Show Description</h2><p>Fred K. Schott stops by to talk about Astro announcement of Astro DB. The pluses and minuses of it, and whether you have to always use the database with Astro DB. We get into how to seed your database, upgrading the database, and the almost weirdly generous pricing model.</p>\n" +
        `<p><a href="https://shoptalkshow.com/607/" style="background: #ca6533; color: black; padding: 8px 20px; text-decoration: none;">Listen on Website &rarr;</a></p><h2>Guests</h2><h3>Fred K. Schott</h3><p><a href="https://github.com/FredKSchott">Guest's Main URL</a> • <a href="https://twitter.com/fredkschott">Guest's Twitter</a></p><p><p>Co-creator of Astro.</p>\n` +
        "</p><h2>Links</h2><ul>\n" +
        '<li><a href="https://astro.build/blog/astro-db-deep-dive/">Astro DB: A Deep Dive | Astro</a></li>\n' +
        '<li><a href="https://astro.build/db/">Astro DB</a></li>\n' +
        '<li><a href="https://astro.build/blog/astro-db-deep-dive/">Astro DB: A Deep Dive | Astro</a></li>\n' +
        '<li><a href="https://github.com/tursodatabase/libsql">tursodatabase/libsql: libSQL is a fork of SQLite that is both Open Source, and Open Contributions.</a></li>\n' +
        '<li><a href="https://stackblitz.com/">StackBlitz | Instant Dev Environments | Click. Code. Done.</a></li>\n' +
        '<li><a href="https://schema.org/">Schema.org - Schema.org</a></li>\n' +
        '<li><a href="https://twitter.com/BHolmesDev/status/1767972934855905576">Ben Holmes on X: "Astro built a database platform. How does it work?</a></li>\n' +
        '<li><a href="https://clerk.com/">Clerk</a></li>\n' +
        '<li><a href="https://lucia-auth.com/">Lucia documentation</a></li>\n' +
        '<li><a href="https://planetscale.com/blog/planetscale-forever">PlanetScale forever</a></li>\n' +
        '<li><a href="https://www.youtube.com/watch?v=h5SiumTDRIU">Astro DB Just Released</a></li>\n' +
        "</ul><h2>Sponsors</h2>",
      audio:
        "https://www.listennotes.com/e/p/7afc54fd90c24aabb7aaae7b989828f6/",
    },
    {
      id: "af0ece984ab24e01aa9ef0b914794f83",
      title: "#23 - Tailwind V4, Layoffs, Do It Anyways, Astro DB",
      description:
        "<p>Lots has happened this week! New alpha preview of Tailwind V4, more very unexpected layoffs of great people, Jason Lengstorf kicked off the &quot;Do It Anyways&quot; movements, and Astro launched a database!</p>\n" +
        "<p><br /></p>\n" +
        "<p><strong>Website: </strong>https://navbar.tech</p>\n" +
        "<p><strong>Pro Tailwind</strong>: https://www.protailwind.com/</p>\n" +
        "<p><br /></p>\n" +
        "<p><strong>Build a Twitter Clone with the Next.js App Router and Supabase</strong> (free egghead course): https://egghead.io/courses/build-a-twitter-clone-with-the-next-js-app-router-and-supabase-19bebadb</p>\n" +
        "<p><br /></p>\n" +
        "<p>Want more NavBar? 🍔🍫</p>\n" +
        "<p>🐦 Twitter - https://twitter.com/the_navbar</p>\n" +
        "<p>🎥 YouTube - https://www.youtube.com/channel/UCmZK0v8TNlCbizOkbIxQwmw</p>\n" +
        "<p>Enjoy these podcasts? Simon and Jon create lots of content 👇</p>\n" +
        "<p><strong>Simon</strong></p>\n" +
        "<p>🐦 Twitter - https://twitter.com/simonswiss</p>\n" +
        "<p>🎥 YouTube - https://www.youtube.com/c/Simonswissdev</p>\n" +
        "<p>🥚 egghead - https://egghead.io/q/resources-by-simon-vrachliotis</p>\n" +
        "<p><strong>Jon</strong></p>\n" +
        "<p>🐦 Twitter - https://twitter.com/jonmeyers_io</p>\n" +
        "<p>🎥 YouTube - https://www.youtube.com/c/jonmeyers</p>\n" +
        "<p>🥚 egghead - https://egghead.io/q/resources-by-jon-meyers</p>",
      audio:
        "https://www.listennotes.com/e/p/af0ece984ab24e01aa9ef0b914794f83/",
    },
  ]);

  await db.insert(PlaylistEpisode).values([
    { playlistId: 1, episodeId: "7afc54fd90c24aabb7aaae7b989828f6" },
    { playlistId: 2, episodeId: "7afc54fd90c24aabb7aaae7b989828f6" },
    { playlistId: 2, episodeId: "af0ece984ab24e01aa9ef0b914794f83" },
  ]);
}
