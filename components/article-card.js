import Link from "next/link";
import cx from "classnames";
import Image from "./image";
import Date from "./date";
import timeToRead from "../lib/time-to-read";

export default ({
  slug,
  coverImage,
  title,
  author,
  snippet,
  date,
  content,
}) => (
  <Link as={`/posts/${slug}`} href="/posts/[slug]">
    <a>
      <article className="my-3">
        <Image src={coverImage.sourceUrl} />
        <div className="py-2 px-1">
          <h3 className="text-md">
            <em>{title}</em> by {author}
          </h3>
          <div className="mt-1" dangerouslySetInnerHTML={{ __html: snippet }} />
          <Date string={date} timeToRead={timeToRead(content)} />
        </div>
      </article>
    </a>
  </Link>
);
