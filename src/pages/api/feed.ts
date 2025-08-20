export async function GET() {
  try {
    const res = await fetch('https://alreadyhappened.xyz/feed');
    const text = await res.text();

    // For server-side XML parsing, you might want to use a library like 'fast-xml-parser'
    // npm install fast-xml-parser
    
    // Simple regex parsing as fallback (not as robust as proper XML parsing)
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>/;
    const descRegex = /<description><!\[CDATA\[(.*?)\]\]><\/description>/;
    const linkRegex = /<link>(.*?)<\/link>/;

    let match;
    while ((match = itemRegex.exec(text)) !== null) {
      const itemContent = match[1];
      const title = titleRegex.exec(itemContent)?.[1] || '';
      const description = descRegex.exec(itemContent)?.[1] || '';
      const link = linkRegex.exec(itemContent)?.[1] || '';

      items.push({ title, description, link });
    }

    return new Response(JSON.stringify(items), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Failed to fetch feed:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch feed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}