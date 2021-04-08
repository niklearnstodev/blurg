import Layout from "components/layouts";

export default function Home({ posts }) {
  return (
    <Layout>
      <header>
        <h3 className="mb-2 text-3xl font-semibold text-purple-600 no-underline">
          I'm Nik
        </h3>
        <span>
          <p>
            Nice to meet ya! I don't yet have much to say, but that will change
            as I become older and more gripe-ly.
          </p>
        </span>
      </header>
    </Layout>
  );
}
