import { site } from "../lib/site";
import { getPosts } from "../lib/posts";

export const dynamic = "force-static";

export default function sitemap() {
  const pages = ["", "/work", "/projects", "/writing", "/now"];
  const posts = getPosts().map((p) => `/writing/${p.slug}`);
  return [...pages, ...posts].map((path) => ({
    url: `${site.url}${path}/`,
    lastModified: new Date(),
  }));
}
