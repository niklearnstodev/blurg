import Layout from "components/layouts";

export default function About() {
  return (
    <Layout>
      <header>
        <h3 className="mb-2 text-3xl font-semibold text-purple-600 no-underline">
          I'm Nik
        </h3>
        <span>
          <p className="mb-2">Nice to meet ya!</p>
          <p className="mb-2">I'm a multi-disciplanary engineer.</p>
          <p className="mb-2">
            I live in beautiful, downtown, <strike>Oakland, California</strike>{" "}
            Nelson, BC.
          </p>
        </span>
      </header>
    </Layout>
  );
}
