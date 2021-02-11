export default ({ src, insideCard }) => (
  <img className={`w-full ${insideCard ? "rounded-t-lg" : ""}`} src={src} />
);
