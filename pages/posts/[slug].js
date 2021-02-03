import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Img from "../../components/image";
import Date from "../../components/date";
import { Twitter, Facebook } from "../../components/icons";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import { SITE_NAME } from "../../lib/constants";
import { splitTitle, timeToRead } from "../../lib/helpers";
import styles from "../../styles/components.module.scss";

export default function Post({ post, posts }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) return <ErrorPage statusCode={404} />;
  if (router.isFallback) return <>Loading...</>;

  return (
    <>
      <Head>
        <title>
          {post.title} | {SITE_NAME}
        </title>
        <meta
          property="og:image"
          content={post.featuredImage?.node?.sourceUrl}
        />
      </Head>

      <h1 className="font-black">
        <em>{splitTitle(post.title).title}</em>
        <br />
        By {splitTitle(post.title).author}
      </h1>
      <Date
        string={post.date}
        className="my-3"
        timeToRead={timeToRead(post.content)}
      />
      <Img src={post.featuredImage?.node?.sourceUrl} />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="mt-4 flex justify-between align-center">
        <div>
          <Twitter />
          <Facebook />
        </div>
        <button
          onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
          style={{ border: "none", background: "initial" }}
        >
          <p className="text-gray-400">
            <span style={{ fontSize: "1.05em" }}>↑</span>&nbsp;&nbsp;Back to top
          </p>
        </button>
      </div>
      <Link href="/">
        <a
          className="block mt-4 mb-4 p-3"
          style={{ border: "2px solid #999999", borderRadius: "0.333333rem" }}
        >
          {/* border-radius: 0.333333rem should be made to a global class */}
          <p className="text-gray-400">
            Next:{" "}
            <strong>
              <em>The Time Machine</em> by H.G. Wells
            </strong>
          </p>
        </a>
      </Link>
    </>
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
