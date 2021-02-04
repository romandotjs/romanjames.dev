import { useState, useEffect } from "react";
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

  const [absoluteURL, setAbsoluteURL] = useState("");
  useEffect(() => setAbsoluteURL(window.location.href), []);

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
      <div className="mt-6 flex justify-between align-center">
        <div>
          <Link
            href={`https://twitter.com/intent/tweet?url=${absoluteURL}&text=Interesting read, @romanthecoder`}
          >
            <a className="hover-black mr-3" target="_blank">
              <Twitter />
            </a>
          </Link>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${"https://google.com"}`}
          >
            <a className="hover-black" target="_blank">
              <Facebook />
            </a>
          </Link>
        </div>
        <button
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
            document.activeElement.blur();
          }}
          className="hover-black"
        >
          <p className="text-gray-400">
            <span style={{ fontSize: "1.05em" }}>↑</span>&nbsp;&nbsp;Back to top
          </p>
        </button>
      </div>
      <Link href={posts.edges[0].node.slug}>
        <a
          className="block mt-6 mb-6 p-3 rounded hover-black"
          style={{ borderWidth: 2, borderStyle: "solid" }}
        >
          <p className="text-gray-400">
            Next:{" "}
            <strong>
              <em>{splitTitle(posts.edges[0].node.title).title}</em> by{" "}
              {splitTitle(posts.edges[0].node.title).author}
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
