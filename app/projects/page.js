import { projects } from "../../lib/site";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <>
      <header className="masthead shell">
        <span className="eyebrow">Projects</span>
        <h1 className="masthead__name rise rise-1" style={{ fontSize: "clamp(2.5rem,10vw,5.5rem)" }}>
          Things I&rsquo;ve built
        </h1>
        <div className="masthead__rule sweep" />
        <p className="lede rise rise-2">
          Some of these earn money, some of them exist because I got annoyed
          enough to build the thing myself.
        </p>
      </header>

      <section className="band shell">
        <ul className="entries">
          {projects.map((p) => {
            const Tag = p.href ? "a" : "div";
            return (
              <li className="entry" key={p.title}>
                <Tag
                  className="entry__link"
                  {...(p.href
                    ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="entry__title">{p.title}</span>
                  <span className="entry__meta">{p.meta}</span>
                  <span className="entry__desc">{p.desc}</span>
                  <span className="entry__stack">{p.stack}</span>
                </Tag>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
