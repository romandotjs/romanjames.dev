import Link from "next/link";

export default ({ href, children }) => (
  <Link href={href}>
    <a
      className="block mr-5 fill-current text-gray-400 hover:text-black dark:hover:text-gray-200 transition duration-300"
      target="_blank"
    >
      {children}
    </a>
  </Link>
);
