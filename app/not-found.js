export default function NotFound() {
  return (
    <header className="masthead shell">
      <span className="eyebrow">404</span>
      <h1 className="masthead__name" style={{ fontSize: "clamp(2.5rem,10vw,5.5rem)" }}>
        Not here
      </h1>
      <div className="masthead__rule" />
      <p className="lede">
        That page doesn&rsquo;t exist. <a href="/" style={{ color: "var(--patina)" }}>Head home</a>.
      </p>
    </header>
  );
}
