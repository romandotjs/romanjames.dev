import Link from "next/link";

export default ({ href, children }) => (
  <Link href={href}>
    <a
      className="block mr-4 fill-current text-gray-400 hover:text-black transition duration-300"
      target="_blank"
    >
      {children}
    </a>
  </Link>
);
