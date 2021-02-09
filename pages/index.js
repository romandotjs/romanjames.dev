import SectionTitle from "../components/section-title";
import ArticleCard from "../components/article-card";
import { getAllPostsForHome } from "../lib/api";

export default ({ allPosts: { edges } }) => (
  <main>
    <SectionTitle className="mt-4">Latest Book</SectionTitle>
    <ArticleCard node={edges[0]?.node} />

    {edges.length > 1 && (
      <>
        <SectionTitle className="mt-8">Recents</SectionTitle>
        {edges.slice(1).map(({ node }, index) => (
          <ArticleCard key={index} node={node} />
        ))}
      </>
    )}
  </main>
);

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome();
  return {
    props: { allPosts },
  };
}
