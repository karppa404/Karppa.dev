// src/lib/getFeed.ts
import Parser from "rss-parser";

const parser = new Parser();

export async function getFeed() {
  // Instead of fetching your own unified feed, fetch the external feeds directly
  const feeds = [
    "https://jottingannon.substack.com/feed.xml",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC35viV3Agj-YLT15IPrrVFg"
  ];

  try {
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

    return items.map((item) => ({
      title: item.title ?? "Untitled",
      link: item.link!,
      pubDate: item.pubDate ? new Date(item.pubDate) : null,
      description: item.contentSnippet ?? "",
    }));
  } catch (error) {
    console.error("Failed to fetch feeds:", error);
    // Return empty array as fallback
    return [];
  }
}