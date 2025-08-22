// src/pages/feed.xml.ts
import rss from '@astrojs/rss';
import Parser from 'rss-parser';

const parser = new Parser();
export const prerender = true;

export async function GET(context) {
  // Define your external feeds
  const feeds = [
    "https://jottingannon.substack.com/feed.xml",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC35viV3Agj-YLT15IPrrVFg"
  ];

  // Fetch and parse all feeds
  const items = (
    await Promise.all(
      feeds.map(async (url) => {
        try {
          const feed = await parser.parseURL(url);
          return feed.items;
        } catch (err) {
          console.error(`Failed to fetch ${url}`, err);
          return [];
        }
      })
    )
  ).flat();

  // Sort by publish date
  items.sort((a, b) => new Date(b.pubDate!).getTime() - new Date(a.pubDate!).getTime());

  // Generate RSS
  return rss({
    title: "My Unified Feed",
    description: "All my posts and videos in one feed.",
    site: context.site!, // comes from astro.config.mjs
    items: items.map((item) => ({
      title: item.title ?? "Untitled",
      link: item.link!,
      pubDate: item.pubDate ? new Date(item.pubDate) : new Date(),
      description: item.contentSnippet ?? item.content ?? "",
    })),
  });
}
