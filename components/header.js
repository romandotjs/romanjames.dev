import Link from "next/link";
import { useRouter } from "next/router";
import cx from "classnames";
import styles from "../styles/components.module.scss";

export default () => {
  const router = useRouter();
  const showHome = router.pathname === "/posts/[slug]";

  return (
    <header
      className={cx(
        styles.header,
        "pr-2",
        "mb-1",
        showHome && styles.postHeader
      )}
    >
      {showHome && (
        <Link href="/">
          <a className="text-gray text-base">← Back to home</a>
        </Link>
      )}
      <Link href="/about">
        <a>
          <img src="/person.svg" alt="About Roman" />
        </a>
      </Link>
    </header>
  );
};
