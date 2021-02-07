export default ({ src, insideCard }) => (
  <img
    className={`w-full ${insideCard ? "rounded-t-md" : "rounded-md"}`}
    src={src}
  />
);
