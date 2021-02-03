import Container from "../components/container";
import Nav from "../components/nav";
import "../styles/resets.css";
import "../styles/colors.css";
import "../styles/fonts.css";
import "../styles/layout.css";
import "../styles/spacing.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Nav />
      <Component {...pageProps} />
    </Container>
  );
}
