import { parseISO, format } from "date-fns";

export default ({ string, className, timeToRead }) => {
  let date = format(parseISO(string), "LLL d, yyyy");
  if (date.includes(`, ${new Date().getFullYear()}`))
    date = date.slice(0, date.length - 6);

  return (
    <p className={`text-gray-500 mt-1.5 ${className}`}>
      <small>
        <time dateTime={string}>{date}</time>
        {timeToRead && <>&nbsp;&nbsp;·&nbsp;&nbsp;{timeToRead}</>}
      </small>
    </p>
  );
};
