import { useRouter } from "next/router";
import Link from "next/link";

export default function Header(props) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";
  return (
    <>
      <header className="flex justify-between">
        <div>
          <h1 className="mb-0">
            <Link href="/">
              <a className="text-3xl font-black text-black no-underline">
                Nik's Haus
              </a>
            </Link>
          </h1>
        </div>
        <div>
          <Link href="/posts/">
            <a className="text-xl font-black text-black no-underline mx-5">
              Blog
            </a>
          </Link>
          <Link href="/tools/">
            <a className="text-xl font-black text-black no-underline mx-5">
              Tools
            </a>
          </Link>
          <Link href="/about/">
            <a className="text-xl font-black text-black no-underline mx-5">
              About
            </a>
          </Link>
        </div>
      </header>
    </>
  );
}
