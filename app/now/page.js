import { now } from "../../lib/site";

export const metadata = { title: "Now" };

export default function Now() {
  return (
    <>
      <header className="masthead shell">
        <span className="eyebrow">Updated {now.updated}</span>
        <h1 className="masthead__name rise rise-1" style={{ fontSize: "clamp(2.5rem,10vw,5.5rem)" }}>
          Right now
        </h1>
        <div className="masthead__rule sweep" />
        <p className="lede rise rise-2">
          What has my attention this season. Not a feed &mdash; just an
          honest answer to &ldquo;what are you up to?&rdquo;
        </p>
        <ul className="manifest rise rise-3" style={{ marginTop: "2.5rem" }}>
          {now.items.map((item, i) => (
            <li key={i} style={{ gridTemplateColumns: "1fr" }}>
              <span className="manifest__val">{item}</span>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
