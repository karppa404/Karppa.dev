import rss from '@astrojs/rss';
import Parser from 'rss-parser';
export { renderers } from '../renderers.mjs';

const parser = new Parser();
const prerender = true;
async function GET(context) {
  const feeds = [
    "https://jottingannon.substack.com/feed.xml",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC35viV3Agj-YLT15IPrrVFg"
  ];
  const items = (await Promise.all(
    feeds.map(async (url) => {
      try {
        const feed = await parser.parseURL(url);
        return feed.items;
      } catch (err) {
        console.error(`Failed to fetch ${url}`, err);
        return [];
      }
    })
  )).flat();
  items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  return rss({
    title: "My Unified Feed",
    description: "All my posts and videos in one feed.",
    site: context.site,
    // comes from astro.config.mjs
    items: items.map((item) => ({
      title: item.title ?? "Untitled",
      link: item.link,
      pubDate: item.pubDate ? new Date(item.pubDate) : /* @__PURE__ */ new Date(),
      description: item.contentSnippet ?? item.content ?? ""
    }))
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
