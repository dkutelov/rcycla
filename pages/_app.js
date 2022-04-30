import { Layout } from "../components/layout/layout.component";
import { LanguageContextProvider } from "../context/language/language.context";

export default function App({ Component, pageProps }) {
  return (
    <LanguageContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageContextProvider>
  );
}
