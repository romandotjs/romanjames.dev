import Container from "../components/container";
import Header from "../components/header";
import SectionTitle from "../components/section-title";
import ArticleCard from "../components/article-card";
import { getAllPostsForHome } from "../lib/api";
import splitTitle from "../lib/split-title";

export default function Home({ allPosts: { edges } }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Container>
      <Header />

      <main className="mt-1">
        <SectionTitle className="text-5xl">Latest Book</SectionTitle>

        <ArticleCard
          slug={heroPost.slug}
          coverImage={heroPost.featuredImage?.node}
          title={splitTitle(heroPost.title).title}
          author={splitTitle(heroPost.title).author}
          snippet={heroPost.excerpt}
          date={heroPost.date}
          content={heroPost.content}
        />

        <SectionTitle className="mt-4 text-5xl">Recents</SectionTitle>

        {morePosts.length > 0 &&
          morePosts.map(({ node }, index) => (
            <ArticleCard
              key={index}
              slug={node.slug}
              coverImage={node.featuredImage?.node}
              title={node.title.match(/.+(?= by)/g)[0]}
              author={node.title.replace(/.+by /g, "")}
              snippet={node.excerpt}
              date={node.date}
              content={node.content}
            />
          ))}
      </main>
    </Container>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome();
  return {
    props: { allPosts },
  };
}
