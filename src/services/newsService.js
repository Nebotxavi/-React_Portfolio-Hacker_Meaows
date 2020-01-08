import http from "./httpService";

const searchByDateEndpoint = "search_by_date?tags=story&hitsPerPage=30&page=";
const searchByPopularity = "search?tags=story&hitsPerPage=30&page=";

export async function getNews(searchBy, page) {
  console.log("into getnews service");
  const endpoint =
    searchBy === "date" ? searchByDateEndpoint : searchByPopularity;
  const { data: newsData } = await http.get(endpoint + page);
  return newsData;
}
