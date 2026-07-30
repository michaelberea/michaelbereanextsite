import "./globals.css";
import { site } from "../lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role} in ${site.place}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.role} in ${site.place}`,
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#16212b" };

const NAV = [
  { href: "/", label: "Home" },
  { href: "/work/", label: "Work" },
  { href: "/projects/", label: "Projects" },
  { href: "/writing/", label: "Writing" },
  { href: "/now/", label: "Now" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,300..800;1,400&family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..500&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <nav className="topbar" aria-label="Primary">
          <div className="topbar__inner">
            <a className="topbar__mark" href="/">MB</a>
            <div className="topbar__links">
              {NAV.map((n) => (
                <a key={n.href} href={n.href}>{n.label}</a>
              ))}
            </div>
          </div>
        </nav>
        <main id="main">{children}</main>
        <footer className="foot shell">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{site.place}</span>
          <a href={site.github}>Source on GitHub</a>
        </footer>
      </body>
    </html>
  );
}
