import { site, manifest, portrait, about, projects, contact } from "../lib/site";
import { getPosts } from "../lib/posts";

export default function Home() {
  const posts = getPosts().slice(0, 3);

  return (
    <>
      <header className="masthead shell">
        <h1 className="masthead__name rise rise-1">
          <span>Michael</span>
          <span>Berea</span>
        </h1>
        <div className="masthead__rule sweep" />
        <p className="lede rise rise-2">{site.tagline}</p>
        <div className="masthead__lower rise rise-3">
          <ul className="manifest">
            {manifest.map((m) => (
              <li key={m.key}>
                <span className="manifest__key">{m.key}</span>
                <span className="manifest__val">{m.val}</span>
              </li>
            ))}
          </ul>
          {portrait.src && (
            <figure className="portrait">
              <img
                src={portrait.src}
                alt={portrait.alt}
                width="800"
                height="1000"
              />
              {portrait.caption && (
                <figcaption>{portrait.caption}</figcaption>
              )}
            </figure>
          )}
        </div>
      </header>

      <section className="band shell">
        <span className="eyebrow">About</span>
        <h2 className="band__head">The short version</h2>
        {about.slice(0, 2).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p>
          <a href="/work/" style={{ color: "var(--patina)" }}>
            More on the work &rarr;
          </a>
        </p>
      </section>

      <section className="band shell">
        <span className="eyebrow">Selected projects</span>
        <h2 className="band__head">Things I&rsquo;ve built</h2>
        <ul className="entries">
          {projects.slice(0, 3).map((p) => (
            <li className="entry" key={p.title}>
              <a className="entry__link" href={p.href || "/projects/"}>
                <span className="entry__title">{p.title}</span>
                <span className="entry__meta">{p.meta}</span>
                <span className="entry__desc">{p.desc}</span>
                <span className="entry__stack">{p.stack}</span>
              </a>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: "1.5rem" }}>
          <a href="/projects/" style={{ color: "var(--patina)" }}>
            All projects &rarr;
          </a>
        </p>
      </section>

      {posts.length > 0 && (
        <section className="band shell">
          <span className="eyebrow">Writing</span>
          <h2 className="band__head">Recent</h2>
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
        </section>
      )}

      <section className="band band--ink">
        <div className="shell">
          <span className="eyebrow">Get in touch</span>
          <h2 className="band__head">
            Happy to talk shop — banking systems, side projects,
            or a site for your business.
          </h2>
          <div className="contact-grid">
            {contact.map((c) => (
              <a key={c.k} href={c.href}>
                <span className="k">{c.k}</span>
                <span className="v">{c.v}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
