import Link from "next/link";
import { useRouter } from "next/router";
import Header from "./header";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  return (
    <div className="max-w-screen-lg px-4 py-8 mx-auto">
      <div>
        <Header />
        <main className="m-4">{children}</main>
      </div>
      <footer>© {new Date().getFullYear()} 🧙</footer>
    </div>
  );
}
