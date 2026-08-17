export const SUBSTACK_URL = "https://karppa404.substack.com"
export const SUBSTACK_FEED = `${SUBSTACK_URL}/feed`

export type Article = {
  title: string
  description: string
  link: string
  publishedAt: string
  thumbnail?: string
}

const FALLBACK_ARTICLES: Article[] = [
  {
    title: "A clueless approach to LLM's trading on Kalshi",
    description: "A fool tried a thing",
    link: "https://karppa404.substack.com/p/a-clueless-approach-to-llms-trading",
    publishedAt: "2026-03-20T18:12:50.000Z",
  },
  {
    title: "Coming soon!",
    description: "On this blog I will post things that interest me.",
    link: "https://karppa404.substack.com/p/coming-soon",
    publishedAt: "2026-01-07T15:58:53.000Z",
  },
]

type Rss2JsonResponse = {
  status: string
  items?: Array<{
    title: string
    description: string
    link: string
    pubDate: string
    thumbnail?: string
    enclosure?: { link?: string }
  }>
}

function stripHtml(value: string) {
  const document = new DOMParser().parseFromString(value, "text/html")
  return document.body.textContent?.trim() || ""
}

export async function getSubstackArticles(): Promise<Article[]> {
  try {
    const endpoint = new URL("https://api.rss2json.com/v1/api.json")
    endpoint.searchParams.set("rss_url", SUBSTACK_FEED)
    const response = await fetch(endpoint)
    if (!response.ok) throw new Error("Unable to load the Substack feed")

    const data = (await response.json()) as Rss2JsonResponse
    if (data.status !== "ok" || !data.items?.length) {
      throw new Error("Substack feed returned no articles")
    }

    return data.items.slice(0, 4).map((item) => ({
      title: item.title,
      description: stripHtml(item.description),
      link: item.link,
      publishedAt: new Date(item.pubDate).toISOString(),
      thumbnail: item.thumbnail || item.enclosure?.link,
    }))
  } catch {
    return FALLBACK_ARTICLES
  }
}
