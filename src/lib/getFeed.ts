// src/lib/getFeed.ts
import Parser from "rss-parser";

const parser = new Parser();

export async function getFeed() {
  const feed = await parser.parseURL("http://localhost:4321/feed.xml");
  return feed.items.map((item) => ({
    title: item.title ?? "Untitled",
    link: item.link!,
    pubDate: item.pubDate ? new Date(item.pubDate) : null,
    description: item.contentSnippet ?? "",
  }));
}
