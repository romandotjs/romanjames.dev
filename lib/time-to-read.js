export default function (content) {
  const plaintext = content.replace(/<[^>]+>/gi, "");
  const numWords = plaintext.match(/\w+/g).length;
  const minsToRead = Math.floor(numWords / 250);
  return `${minsToRead} min read`;
}
