import Nav from "../components/nav";
import "../styles/fonts.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="min-h-screen max-w-sm mx-auto sm:max-w-full px-5 sm:px-7 bg-white dark:bg-gray-900 dark:text-gray-300">
        <Nav />
        <Component {...pageProps} />
        <p className="text-center text-gray-300 dark:text-gray-700 mt-7 mb-5">
          © 2021 Roman James
        </p>

        {/* .min-h-screen for IE, calc() for modern browsers */}
        <style jsx>{`
          div {
            min-height: calc(100vh - 0.5rem);
          }
        `}</style>
      </div>
      <div className="h-2 bg-gradient-to-r from-gray-800 to-gray-300 dark:from-gray-900 dark:to-gray-700" />
    </>
  );
}
