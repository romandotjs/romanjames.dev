import SectionTitle from "../components/section-title";
import ArticleCard from "../components/article-card";
import { getAllPostsForHome } from "../lib/api";
import { splitTitle } from "../lib/helpers";

export default function Home({ allPosts: { edges } }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <>
      <main>
        <SectionTitle className="text-5xl font-black">Latest Book</SectionTitle>

        <ArticleCard
          slug={heroPost.slug}
          coverImage={heroPost.featuredImage?.node}
          title={splitTitle(heroPost.title).title}
          author={splitTitle(heroPost.title).author}
          snippet={heroPost.excerpt}
          date={heroPost.date}
          content={heroPost.content}
        />

        <SectionTitle className="mt-4 text-5xl font-black">
          Recents
        </SectionTitle>

        {morePosts.length > 0 &&
          morePosts.map(({ node }, index) => (
            <ArticleCard
              key={index}
              slug={node.slug}
              coverImage={node.featuredImage?.node}
              title={splitTitle(node.title).title}
              author={splitTitle(node.title).author}
              snippet={node.excerpt}
              date={node.date}
              content={node.content}
            />
          ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome();
  return {
    props: { allPosts },
  };
}
