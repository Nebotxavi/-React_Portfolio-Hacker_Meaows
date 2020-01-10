import http from "./httpService";
import { getTimestamp } from "../utils/getTimestamp";

const searchByDateEndpoint = "search_by_date?"; // "tags=story&hitsPerPage=30&page=";
const searchByPopEndpoint = "search?"; // "tags=story&hitsPerPage=30&page=";

const searchStoriesEndpoint = "tags=story";
const searchCommentsEndpoint = "tags=comment";
const searchAllEndpoint = "tags=(story,comment)";

const hitsPerPageEndpoint = "&hitsPerPage=";
const pageEndpoint = "&page=";

const timeEndpoint = "&numericFilters=created_at_i>";

export async function getContent(
  searchBy,
  searchType,
  searchForTime,
  page,
  newsPerPage
) {
  let endpoint = "";
  endpoint += searchBy === "Date" ? searchByDateEndpoint : searchByPopEndpoint;
  endpoint +=
    searchType === "Stories"
      ? searchStoriesEndpoint
      : searchType === "All"
      ? searchAllEndpoint
      : searchCommentsEndpoint;
  endpoint += hitsPerPageEndpoint + newsPerPage + pageEndpoint + page;

  endpoint +=
    searchForTime === "All time"
      ? ""
      : timeEndpoint + getTimestamp(searchForTime);

  console.log("endpoint", endpoint);

  const { data: newsData } = await http.get(endpoint);
  return newsData;
}
