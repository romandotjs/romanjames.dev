import { parseISO, format } from "date-fns";

export default ({ post, className }) => {
  let date = format(parseISO(post.date), "LLL d, yyyy");
  if (date.includes(`, ${new Date().getFullYear()}`))
    date = date.slice(0, date.length - 6);

  const timeToRead = (() => {
    const plaintext = post.content.replace(/<[^>]+>/gi, "");
    const wordCount = plaintext.match(/\w+/g).length;
    const minsToRead = Math.floor(wordCount / 250); // 250 is average
    return `${minsToRead} min read`;
  })();

  return (
    <p className={`text-gray-500 mt-1.5 ${className}`}>
      <small>
        <time dateTime={post.date}>{date}</time>
        {timeToRead && <>&nbsp;&nbsp;·&nbsp;&nbsp;{timeToRead}</>}
      </small>
    </p>
  );
};
