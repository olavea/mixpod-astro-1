const { Client } = require("podcast-api");

// See 1Password for apiKey or
// If apiKey is null, then we will connect to a mock server
// that returns fake data for testing purposes.
const client = Client({ apiKey: import.meta.env.PUBLIC_BLEH });
client
  .searchEpisodeTitles({
    q: "Dev-Life",
  })
  .then((response) => {
    // Get response json data here
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
