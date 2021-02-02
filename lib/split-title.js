export default (string) => ({
  title: string.match(/.+(?= by)/g)[0],
  author: string.replace(/.+by /g, ""),
});
