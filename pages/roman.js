import Link from "next/link";
import { Twitter, Instagram, Linkedin, Facebook } from "../components/icons";

export default () => (
  <>
    <img
      src="/roman.png"
      alt="Roman's profile image"
      className="mx-auto mt-4"
      style={{ width: "10rem", borderRadius: "100%" }}
    />
    <h1 className="text-center mt-3 font-black">Roman James</h1>
    <p className="mt-3">
      Hello! I am a 17-year-old working in the food industry looking to break
      through into tech. Specifically, my dream is to become a “digital nomad,”
      working from coffee shops on people’s digital businesses and eventually
      (hopefully) on my own apps and websites. A blog for book analysis seems to
      me like a nice starting place.
    </p>
    <p className="mt-4">Please help build me up!</p>
    <div className="flex align-center mt-3">
      <Link href="https://twitter.com/romanthecoder">
        <a className="mr-3">
          <Twitter />
        </a>
      </Link>
      <Link href="https://instagram.com/romanthecoder">
        <a className="mr-3">
          <Instagram />
        </a>
      </Link>
      <Link href="https://linkedin.com/in/romanthecoder">
        <a className="mr-3">
          <Linkedin />
        </a>
      </Link>
      <Link href="https://facebook.com/romanthecoder">
        <a className="mr-3">
          <Facebook />
        </a>
      </Link>
    </div>
  </>
);
