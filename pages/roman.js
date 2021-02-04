import Link from "next/link";
import { Twitter, Instagram, Linkedin, Facebook } from "../components/icons";

export default () => (
  <>
    <img
      src="/roman.png"
      alt="Roman's profile image"
      className="mx-auto mt-6"
      style={{ width: "10rem", borderRadius: "100%" }}
    />
    <h1 className="text-center mt-3 font-black">Roman James</h1>
    <p className="mt-3">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello! I am a 17-year-old
      working in the food industry looking to break through into tech.
      Specifically, my dream is to become a “digital nomad,” working from coffee
      shops on people’s digital businesses and eventually (hopefully) on my own
      apps and websites. A blog for book analysis seems to me like a nice
      starting place.
    </p>
    <p className="mt-6 text-center">Please help build me up!</p>
    <div className="flex justify-center align-center mt-3 mb-6">
      <Link href="https://twitter.com/romanthecoder">
        <a target="_blank" className="mr-3 hover-black">
          <Twitter />
        </a>
      </Link>
      <Link href="https://instagram.com/romanthecoder">
        <a target="_blank" className="mr-3 hover-black">
          <Instagram />
        </a>
      </Link>
      <Link href="https://linkedin.com/in/romanthecoder">
        <a target="_blank" className="mr-3 hover-black">
          <Linkedin />
        </a>
      </Link>
      <Link href="https://facebook.com/romanthecoder">
        <a target="_blank" className="mr-3 hover-black">
          <Facebook />
        </a>
      </Link>
    </div>
  </>
);
