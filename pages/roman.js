import { Twitter, Instagram, Linkedin, Facebook } from "../components/icons";
import SocialLink from "../components/social-link";

export default () => (
  // Only works to center in page when _app.js has "flex flex-col" on the wrapper div, but that breaks margin collapsing between the nav, main, and footer. Look up margin collapsing in block formatting context and flex formatting context.
  <main /* className="flex-grow flex flex-col justify-center" */>
    <div className="mx-6 flex flex-col rounded-lg shadow-xl">
      <img
        src="/roman.jpg"
        alt="Roman's profile image"
        className="w-full rounded-t-xl"
      />
      <div className="border border-gray-200 dark:border-gray-800 border-t-0 rounded-b-md">
        <h1 className="text-2xl text-center mt-5 font-black">Roman James</h1>
        <p className="px-5 pb-7 mt-2">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello! I am a
          17-year-old working in the food industry looking to break through into
          tech. Specifically, my dream is to become a “digital nomad,” working
          from coffee shops on people’s digital businesses and eventually
          (hopefully) on my own apps and websites. A blog for book analysis
          seems to me like a nice starting place.
        </p>
      </div>
    </div>
    <p className="mt-8 text-center">Please help build me up!</p>
    <div className="flex justify-center align-center mt-3.5 mb-7 ml-5">
      <SocialLink href="https://twitter.com/romanthecoder">
        <Twitter />
      </SocialLink>
      <SocialLink href="https://instagram.com/romanthecoder">
        <Instagram />
      </SocialLink>
      <SocialLink href="https://linkedin.com/in/romanthecoder">
        <Linkedin />
      </SocialLink>
      <SocialLink href="https://facebook.com/romanthecoder">
        <Facebook />
      </SocialLink>
    </div>
  </main>
);
