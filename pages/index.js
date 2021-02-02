import Link from "next/link";
import cx from "classnames";
import Container from "../components/container";
import SectionTitle from "../components/section-title";
import ArticleCard from "../components/article-card";
import { getAllPostsForHome } from "../lib/api";
import splitTitle from "../lib/split-title";
import styles from "../styles/Home.module.css";
import spacing from "../styles/spacing.module.css";

export default function Home({ allPosts: { edges } }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Container>
      <header className={cx(styles.header, spacing.pr2)}>
        <Link href="/about">
          <a>
            <img src="/person.svg" alt="About Roman" />
          </a>
        </Link>
      </header>

      <main className={spacing.mt1}>
        <SectionTitle>Latest Book</SectionTitle>

        <ArticleCard
          slug={heroPost.slug}
          coverImage={heroPost.featuredImage?.node}
          title={splitTitle(heroPost.title).title}
          author={splitTitle(heroPost.title).author}
          snippet={heroPost.excerpt}
          date={heroPost.date}
          content={heroPost.content}
        />

        <SectionTitle className={spacing.mt4}>Recents</SectionTitle>

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
