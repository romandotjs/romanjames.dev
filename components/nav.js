import Link from "next/link";
import { useRouter } from "next/router";
import { PersonCircle, Exit } from "../components/icons";

export default () => {
  const router = useRouter();
  const showBackBtn = router.pathname === "/roman";

  return (
    <nav className="mb-3 flex justify-between align-center">
      <Link href="/">
        <a className="text-gray-400 hover:text-black transition duration-300 block mr-4">
          <p className="font-black text-xl">
            Essays, by&nbsp;<em>Roman&nbsp;James</em>
          </p>
        </a>
      </Link>
      {showBackBtn ? (
        <button
          onClick={router.back}
          className="flex align-center mr-2 fill-current text-gray-400 hover:text-black transition duration-300 block"
        >
          <Exit />
        </button>
      ) : (
        <Link href="/roman">
          {/* icon itself isn't vertically centered by default */}
          <a
            title="About"
            className="flex align-center mr-2 fill-current text-gray-400 hover:text-black transition duration-300 block"
          >
            <PersonCircle />
          </a>
        </Link>
      )}
    </nav>
  );
};
