import Head from "next/head";
import Link from "next/link";
import cx from "classnames";
import styles from "../styles/Home.module.css";
import spacing from "../styles/spacing.module.css";

const SectionTitle = ({ className, children }) => (
  <h2 className={className}>{children}</h2>
);

const ArticleCard = ({
  imgSrc,
  imgAlt,
  title,
  author,
  snippet,
  date,
  length,
}) => (
  <article className={spacing.my3}>
    <img src={imgSrc} alt={imgAlt} className={styles.thumbnail} />
    <div className={cx(spacing.py2, spacing.px1)}>
      <h3>
        <em>{title}</em> by {author}
      </h3>
      <p className={spacing.mt1}>{snippet}</p>
      <p className={cx(styles.greyText, spacing.mt1)}>
        <small>
          {date} · {length} min read
        </small>
      </p>
    </div>
  </article>
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          imgSrc="/thumbnail.jpg"
          imgAlt="Article thumbnail"
          title="Ready Player One"
          author="Ernest Cline"
          snippet="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus metus volutpat sollicitudin tempus..."
          date="Jan 27"
          length="6"
        />

        <SectionTitle className={spacing.mt4}>Recents</SectionTitle>

        {Array(4)
          .fill(0)
          .map((value, index) => (
            <ArticleCard
              key={index}
              imgSrc="/thumbnail.jpg"
              imgAlt="Article thumbnail"
              title="Ready Player One"
              author="Ernest Cline"
              snippet="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus metus volutpat sollicitudin tempus..."
              date="Jan 27"
              length="6"
            />
          ))}

        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
