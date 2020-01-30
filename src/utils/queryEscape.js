export function escapeQuery(query) {
  let escapedQuery = query;
  if (escapedQuery.includes("&")) escapedQuery = escapedQuery.replace("&", " ");
  if (escapedQuery.startsWith("%"))
    escapedQuery = escapedQuery.replace("%", "");

  return escapedQuery;
}
