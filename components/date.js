import cx from "classnames";
import { parseISO, format } from "date-fns";

export default ({ string, className, timeToRead }) => {
  let date = format(parseISO(string), "LLL d, yyyy");
  if (date.includes(`, ${new Date().getFullYear()}`))
    date = date.slice(0, date.length - 6);

  return (
    <p className={cx("text-gray", "mt-1", className)}>
      <small>
        <time dateTime={string}>{date}</time>
        {timeToRead && <>&nbsp;&nbsp;·&nbsp;&nbsp;{timeToRead}</>}
      </small>
    </p>
  );
};
