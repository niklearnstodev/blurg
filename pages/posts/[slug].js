import Layout from "components/layouts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
// import style from "./slug.module.css";

export default function Post({ content, frontmatter }) {
  return (
    <Layout>
      <article>
        {/* <ReactMarkdown className={style.slugMarkDown} source={content} /> */}
        <ReactMarkdown className="prose" source={content} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("_posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join("_posts", slug + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = data.date.toLocaleDateString("en-US", options);

  const frontmatter = {
    ...data,
    date: formattedDate,
  };

  return {
    props: {
      content: `# ${data.title}\n #### ${formattedDate}\n${content}`,
      frontmatter,
    },
  };
}
