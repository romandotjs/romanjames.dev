import Link from "next/link";
import Image from "./image";
import Date from "./date";
import ArticleTitle from "./article-title";

export default ({ node }) => (
  <Link as={`/posts/${node.slug}`} href="/posts/[slug]">
    <a className="block my-4 shadow-xl rounded-xl">
      <article>
        <Image src={node.featuredImage?.node.sourceUrl} insideCard />
        <div className="p-4">
          <h3 className="font-bold text-lg">
            <ArticleTitle>{node.title}</ArticleTitle>
          </h3>
          <div
            className="mt-1.5"
            dangerouslySetInnerHTML={{ __html: node.excerpt }}
          />
          <Date post={node} />
        </div>
      </article>
    </a>
  </Link>
);
