import { prerender } from '$app/server';
import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser({
    ignoreAttributes: false, // Required to read the 'url' from enclosure
    attributeNamePrefix: ""  // Removes the '@_' prefix for cleaner access
});

export const getSUBPosts = prerender(async () => {

        const response = await fetch("https://anon784577.substack.com/feed");
        const xmlData = await response.text();
        
        const jObj = parser.parse(xmlData);
        const items = jObj.rss.channel.item;

        // Ensure items is always an array (handles single post cases)
        const postList = Array.isArray(items) ? items : [items];

        return postList.map(post => {
            return {
                title: post.title,
                // Accessing the url attribute from the enclosure tag
                thumbnail: post.enclosure?.url || '',
                datePublished: post.pubDate,
                link: post.link,
                description: post.description
            };
        });
 
});

export const getIcon = prerender(async () => {
  const response = await fetch("https://github.com/karppa404.png");
  const buffer = await response.arrayBuffer();
  
  // Convert the buffer to a base64 string
  const base64 = btoa(
    new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
  );
  
  return `data:image/png;base64,${base64}`;
})