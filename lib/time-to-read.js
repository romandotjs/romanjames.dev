export default function (essayAsHtmlString) {
  const plaintext = essayAsHtmlString.replace(/<[^>]+>/gi, "");
  const wordCount = plaintext.match(/\w+/g).length;
  const minsToRead = Math.floor(wordCount / 250); // 250 is average
  return `${minsToRead} min read`;
}
