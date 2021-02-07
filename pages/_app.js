import Nav from "../components/nav";
import "../styles/fonts.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex pb-1 bg-gradient-to-r from-black to-gray-400">
      <div className="p-4 bg-white">
        <Nav />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
