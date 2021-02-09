export default ({ children, lineBreak }) => (
  <>
    <em>{children.match(/.+(?= by)/g)[0]}</em>{" "}
    {lineBreak ? (
      <>
        <br />
        By{" "}
      </>
    ) : (
      "by "
    )}
    {children.replace(/.+by /g, "")}
  </>
);
