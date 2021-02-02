import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../../components/container";
import Img from "../../components/image";
import Date from "../../components/date";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import { SITE_NAME } from "../../lib/constants";
import splitTitle from "../../lib/split-title";
import timeToRead from "../../lib/time-to-read";
import styles from "../../styles/Post.module.css";
import spacing from "../../styles/spacing.module.css";

export default function Post({ post, posts }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) return <ErrorPage statusCode={404} />;
  if (router.isFallback) return <Container>Loading...</Container>;

  return (
    <Container>
      <Head>
        <title>
          {post.title} | {SITE_NAME}
        </title>
        <meta
          property="og:image"
          content={post.featuredImage?.node?.sourceUrl}
        />
      </Head>
      <h1>
        <em>{splitTitle(post.title).title}</em>
        <br />
        By {splitTitle(post.title).author}
      </h1>
      <Date
        string={post.date}
        className={spacing.my3}
        timeToRead={timeToRead(post.content)}
      />
      <Img src={post.featuredImage?.node?.sourceUrl} />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Container>
  );
}

export async function getStaticProps({ params, previewData }) {
  const data = await getPostAndMorePosts(params.slug, previewData);

  return {
    props: {
      post: data.post,
      posts: data.posts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
}
