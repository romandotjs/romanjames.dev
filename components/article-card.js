import Link from "next/link";
import Image from "./image";
import Date from "./date";
import { splitTitle, timeToRead } from "../lib/helpers";

export default ({ node }) => (
  <Link as={`/posts/${node.slug}`} href="/posts/[slug]">
    <a className="block my-4 shadow-xl rounded-xl">
      <article>
        <Image src={node.featuredImage?.node.sourceUrl} insideCard />
        <div className="p-2.5">
          <h3 className="font-bold text-md">
            <em>{splitTitle(node.title).title}</em> by{" "}
            {splitTitle(node.title).author}
          </h3>
          <div
            className="mt-1.5"
            dangerouslySetInnerHTML={{ __html: node.excerpt }}
          />
          <Date string={node.date} timeToRead={timeToRead(node.content)} />
        </div>
      </article>
    </a>
  </Link>
);
