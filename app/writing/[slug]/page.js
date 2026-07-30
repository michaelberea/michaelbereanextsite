import { getPosts, getPost } from "../../../lib/posts";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default function Post({ params }) {
  const post = getPost(params.slug);
  if (!post) return null;

  return (
    <>
      <header className="masthead shell">
        <span className="eyebrow">{post.displayDate}</span>
        <h1 className="rise rise-1" style={{ fontSize: "clamp(2rem,7vw,3.6rem)", marginBottom: "1.5rem" }}>
          {post.title}
        </h1>
        <div className="masthead__rule sweep" />
      </header>
      <section className="shell" style={{ paddingBottom: "5rem" }}>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        <p style={{ marginTop: "3rem" }}>
          <a href="/writing/" style={{ color: "var(--patina)" }}>&larr; All writing</a>
        </p>
      </section>
    </>
  );
}
