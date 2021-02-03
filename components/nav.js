import Link from "next/link";
// import { useRouter } from "next/router";
import cx from "classnames";
import PersonCircle from "../components/person-circle";
import styles from "../styles/components.module.scss";

export default () => {
  // const router = useRouter();
  // const isHome = router.pathname === "/";

  return (
    <nav className={cx(styles.nav, "mb-3")}>
      <Link href="/">
        <a>
          <p className="font-black text-xl mr-4 text-gray-400">
            Essays, by&nbsp;<em>Roman&nbsp;James</em>
          </p>
        </a>
      </Link>
      <Link href="/about">
        <a title="About">
          <PersonCircle className="mr-2" />
        </a>
      </Link>
    </nav>
  );
};
