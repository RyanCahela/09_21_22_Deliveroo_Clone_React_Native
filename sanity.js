const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");

const client = sanityClient({
  projectId: "1cen8zui",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
