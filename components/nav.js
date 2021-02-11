import Link from "next/link";

export default () => (
  <nav className="text-center my-10">
    <p className="text-gray-300 dark:text-gray-700 text-2xl">
      <Link href="/">
        <a className="font-bold hover:text-black dark:hover:text-gray-200 transition duration-300">
          Essays
        </a>
      </Link>
      <span> by </span>
      <Link href="/roman">
        <a className="font-bold italic hover:text-black dark:hover:text-gray-200 transition duration-300">
          Roman James
        </a>
      </Link>
    </p>
  </nav>
);
