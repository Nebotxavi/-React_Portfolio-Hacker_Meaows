import http from "./httpService";

const topStoriesEndpoint = "topstories.json?print=pretty";

export async function getTopStoriesID() {
  const { data: newsID } = await http.get(topStoriesEndpoint);
  return newsID;
}
