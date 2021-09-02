import Layout from "components/layouts";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      {posts.length == 0 ? (
        <Layout>
          <header>
            <h3 className="text-3xl mb-2 font-semibold text-purple-600 no-underline">
              No posts!
            </h3>
          </header>
          <section>
            <p>No posts yet. 🦃</p>
          </section>
        </Layout>
      ) : (
        <Layout>
          {posts.map(({ frontmatter: { title, description, date }, slug }) => (
            <article key={title}>
              <header>
                <h3 className="mb-2">
                  <Link href={"/posts/[slug]"} as={`/posts/${slug}`}>
                    <a className="text-3xl font-semibold text-purple-600 no-underline">
                      {title}
                    </a>
                  </Link>
                </h3>
                <span className="mb-4">{date}</span>
              </header>
              <section>
                <p className="mb-4">{description}</p>
              </section>
            </article>
          ))}
        </Layout>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/_posts`);
  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`_posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = data.date.toLocaleDateString("en-US", options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
