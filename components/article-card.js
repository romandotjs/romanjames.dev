import Link from "next/link";
import cx from "classnames";
import Image from "./image";
import Date from "./date";
import spacing from "../styles/spacing.module.css";
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
      <article className={spacing.my3}>
        <Image src={coverImage.sourceUrl} />
        <div className={cx(spacing.py2, spacing.px1)}>
          <h3>
            <em>{title}</em> by {author}
          </h3>
          <div
            className={spacing.mt1}
            dangerouslySetInnerHTML={{ __html: snippet }}
          />
          <Date string={date} timeToRead={timeToRead(content)} />
        </div>
      </article>
    </a>
  </Link>
);
