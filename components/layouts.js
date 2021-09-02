import Link from "next/link";
import { useRouter } from "next/router";
import Header from "./header";
import Head from "next/head";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  return (
    <>
      <Head>
        <title>Nik's Haus</title>
        <meta property="og:title" content="Nik's Haus" key="title" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>"
        ></link>
      </Head>
      <div className="max-w-screen-lg px-4 py-8 mx-auto">
        <div>
          <Header />
          <main className="m-4">{children}</main>
        </div>
        <footer>© {new Date().getFullYear()} 🧙</footer>
      </div>
    </>
  );
}
