import { getPosts } from "../../lib/posts";

export const metadata = { title: "Writing" };

export default function Writing() {
  const posts = getPosts();
  return (
    <>
      <header className="masthead shell">
        <span className="eyebrow">Writing</span>
        <h1 className="masthead__name rise rise-1" style={{ fontSize: "clamp(2.5rem,10vw,5.5rem)" }}>
          Notes
        </h1>
        <div className="masthead__rule sweep" />
        <p className="lede rise rise-2">
          Theology, legacy systems, and the occasional thing I learned the
          hard way.
        </p>
      </header>

      <section className="band shell">
        {posts.length === 0 ? (
          <p>Nothing published yet. Drop a markdown file in <code>content/posts/</code> and it shows up here.</p>
        ) : (
          <ul className="entries">
            {posts.map((p) => (
              <li className="entry" key={p.slug}>
                <a className="entry__link" href={`/writing/${p.slug}/`}>
                  <span className="entry__title">{p.title}</span>
                  <span className="entry__meta">{p.displayDate}</span>
                  <span className="entry__desc">{p.summary}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
