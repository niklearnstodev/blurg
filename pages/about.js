import Layout from "components/layouts";

export default function About() {
  return (
    <Layout>
      <header>
        <h3 className="text-3xl mb-2 font-semibold text-purple-600 no-underline">
          I'm Nik
        </h3>
        <span>
          <p className="mb-2">Nice to meet ya!</p>
          <p>
            I'm a multi-disciplanary engineer. I've worked in the domains of
            industrial automation and process engineering, telecom, aerospace,
            tech/management consulting, and SaaS startups.
          </p>
          <p>
            I'm currently living the remote dream in Nelson, British Columbia,
            wiritng code between sports!
          </p>
        </span>
      </header>
    </Layout>
  );
}
