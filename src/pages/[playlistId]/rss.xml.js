import rss from "@astrojs/rss";

const DB = {
  playlist1: {
    title: "Playlist One",
    description: "A loevley description",
    items: [
      {
        episode: 192,
        title: "No such thing as too many clips",
        description: `<p>Benedikt remains in crunch mode. Benedicte and her pirate family are back to streaming. </p><p>Still working on their visual workflow builder, Benedikt and the Userlist team are still in crunch mode. The velocity has been crazy as they were shipping stuff super fast like adding new node types in just a couple of hours.</p><p>Benedicte, together with her pirate family and AK, just finished their first stream on charting the course for <a href="https://mixpod.app/">MixPod</a>. And as part of their marketing strategy, they’ll be releasing <a href="https://www.youtube.com/@QueenRaae/shorts">clips from the streams</a> on various channels. She also has an upcoming mini-project which she calls <a href="https://x.com/raae/status/1720508607131767160?s=20">SemanticAdvent</a>, where she’ll select 24 Semantic HTML tags in 24 days.</p><p>Benedikt and Benedicte talk about gamification (<a href="https://polarhabits.com/">Polar Habits</a> was mentioned), Lillian’s first marching band concert, how to get customer feedback, and more.</p>`,
        audio: "https://media.transistor.fm/9ed7bbd6/cb35dd72.mp3",
        audio_length_sec: 46907855,
        pubDate: "Thu, 02 Nov 2023 22:00:00 +0100",
        link: "https://share.transistor.fm/s/e5371927",
      },
    ],
  },
  playlist2: {
    title: "Playlist Two",
    description: "A aweful description",
    items: [],
  },
};

export function GET({ params }) {
  const playlist = DB[params.playlistId];

  return rss({
    // `<title>` field in output xml
    title: playlist.title,
    // `<description>` field in output xml
    description: playlist.description,
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: "https://example.com",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: playlist.items.map((item) => ({
      title: item.title,
      description: item.description,
      link: item.link,
      pubDate: item.pubDate,
      customData: `
        <enclosure url="${item.audio}" length="${item.audio_length_sec}" type="audio/mpeg" />
      `,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
