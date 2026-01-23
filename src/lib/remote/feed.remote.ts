import { query } from '$app/server';
import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser({
    ignoreAttributes: false, // Required to read the 'url' from enclosure
    attributeNamePrefix: ""  // Removes the '@_' prefix for cleaner access
});

export const getSUBPosts = query(async () => {

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

export const getIcon = query(async () => {
  const response = await fetch("https://github.com/karppa404.png");
  const buffer = await response.arrayBuffer();
  
  // Convert the buffer to a base64 string
  const base64 = btoa(
    new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
  );
  
  return `data:image/png;base64,${base64}`;
})

export const getWeather = query(async () => {
  // Use the API endpoint (api.open-meteo.com) instead of the docs page
  const url = "https://api.open-meteo.com/v1/forecast?latitude=32.7831&longitude=-96.8067&current=temperature_2m&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FChicago";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Weather data fetch failed: ${response.statusText}`);
  }

  const data = await response.json();

  // Return the specific piece of data you need
  return {
    temp: data.current.temperature_2m,
    unit: data.current_units.temperature_2m,
    time: data.current.time
  };
});