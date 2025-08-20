// Alternative implementation using fast-xml-parser
// First install: npm install fast-xml-parser
// src/pages/api/feed.ts

import { XMLParser } from 'fast-xml-parser';

export async function GET() {
  try {
    const res = await fetch('https://alreadyhappened.xyz/feed', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Blog RSS Reader)',
        'Accept': 'application/rss+xml, application/xml, text/xml',
      },
    });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: `Failed to fetch feed: ${res.status} ${res.statusText}` }), 
        { status: res.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const xmlText = await res.text();
    
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      textNodeName: "_text",
      parseAttributeValue: true,
      parseTagValue: true,
      trimValues: true,
    });

    const xmlDoc = parser.parse(xmlText);
    
    // Navigate the parsed XML structure
    const rss = xmlDoc.rss || xmlDoc.feed; // Handle both RSS and Atom feeds
    if (!rss) {
      throw new Error('Invalid RSS feed structure');
    }

    const channel = rss.channel || rss;
    const items = channel.item || channel.entry || [];
    
    // Ensure items is an array
    const itemsArray = Array.isArray(items) ? items : [items];
    
    const posts = itemsArray.map((item: any) => ({
      title: item.title?._text || item.title || 'Untitled',
      description: item.description?._text || item.description || item.summary?._text || item.summary || 'No description available',
      link: item.link?._text || item.link?.href || item.link || '',
      pubDate: item.pubDate || item.published || item.updated || ''
    }));

    return new Response(JSON.stringify(posts), {
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300',
      },
    });

  } catch (err) {
    console.error('Failed to fetch feed:', err);
    
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    
    return new Response(
      JSON.stringify({ error: 'Failed to fetch feed', details: errorMessage }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}