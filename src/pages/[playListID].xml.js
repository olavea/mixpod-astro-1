import rss from "@astrojs/rss";

// fake a DB
const DB = {
  playlist1: {
    title: "A fabulous MixPod for my friend",
    description: "A humble MixPod",
    episodes: [],
  },
};

export function GET(context) {
  // get the ID for the playlist
  const playListID = "playlist1";

  const playList = DB[playListID];
  // get the ID for the playlist from the URL [playListID].xml.js

  return rss({
    // `<title>` field in output xml
    title: playList.title,
    // `<description>` field in output xml
    description: playList.description,
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: playList.episodes,
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
