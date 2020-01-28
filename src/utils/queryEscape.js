export function escapeQuery(query) {
  console.log("into handle Change", query);
  let escapedQuery = query;
  if (escapedQuery.includes("&")) escapedQuery = escapedQuery.replace("&", " ");
  if (escapedQuery.startsWith("%"))
    escapedQuery = escapedQuery.replace("%", "");

  return escapedQuery;
}
