import { roles, capabilities, about, beliefs } from "../../lib/site";

export const metadata = { title: "Work" };

export default function Work() {
  return (
    <>
      <header className="masthead shell">
        <span className="eyebrow">Work</span>
        <h1 className="masthead__name rise rise-1" style={{ fontSize: "clamp(2.5rem,10vw,5.5rem)" }}>
          What I do
        </h1>
        <div className="masthead__rule sweep" />
        {about.map((p, i) => (
          <p key={i} className="lede" style={{ marginBottom: "1rem" }}>
            {p}
          </p>
        ))}
      </header>

      <section className="band shell">
        <span className="eyebrow">Roles</span>
        {roles.map((r) => (
          <article className="role" key={r.title}>
            <div className="role__when">{r.when}</div>
            <div>
              <h2 className="role__title">{r.title}</h2>
              <p className="role__org">{r.org}</p>
              <ul>
                {r.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="band shell">
        <span className="eyebrow">Tools I reach for</span>
        <h2 className="band__head">Capabilities</h2>
        <ul className="rail">
          {capabilities.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section className="band band--ink">
        <div className="shell">
          <span className="eyebrow">Convictions</span>
          <h2 className="band__head">{beliefs.head}</h2>
          {beliefs.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </>
  );
}
