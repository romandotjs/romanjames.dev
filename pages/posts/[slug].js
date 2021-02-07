import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Img from "../../components/image";
import Date from "../../components/date";
import SocialLink from "../../components/social-link";
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

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    document.activeElement.blur();
  };

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

      <h1 className="text-3xl font-black">
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
        <div className="flex">
          <SocialLink
            href={`https://twitter.com/intent/tweet?url=${absoluteURL}&text=Interesting read, @romanthecoder`}
          >
            <Twitter />
          </SocialLink>
          <SocialLink
            href={`https://www.facebook.com/sharer/sharer.php?u=${absoluteURL}`}
          >
            <Facebook />
          </SocialLink>
        </div>
        <button
          onClick={scrollToTop}
          className="text-gray-400 hover:text-black transition duration-300"
        >
          <p>↑&nbsp;&nbsp;Back to top</p>
        </button>
      </div>
      <Link href={posts.edges[0].node.slug}>
        <a className="block my-6 p-3 rounded-md text-gray-400 hover:text-black border-gray-400 hover:border-black border-2 transition duration-300">
          <p>
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
