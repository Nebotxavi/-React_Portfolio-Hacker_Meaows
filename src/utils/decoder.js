export function htmlDecode(input) {
  const paragraphs = input.split("<p>");
  const parser = new DOMParser();
  const pList = paragraphs.map(p => {
    const parsedP = parser.parseFromString(p, "text/html");
    return parsedP.documentElement.textContent;
  });
  return pList;
}
