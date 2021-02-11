import Link from "next/link";
import Image from "./image";
import Date from "./date";
import ArticleTitle from "./article-title";

export default ({ node }) => (
  <Link as={`/posts/${node.slug}`} href="/posts/[slug]">
    <a className="block mb-5 rounded-lg shadow-xl hover:shadow-none transition duration-300">
      <article>
        <Image src={node.featuredImage?.node.sourceUrl} insideCard />
        <div className="p-5 border border-gray-200 dark:border-gray-800 border-t-0 rounded-b-md">
          <h3 className="font-bold text-xl">
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
