// FeedComponent.jsx
import { useState, useEffect } from 'react';
import Card from './card';

export default function FeedComponent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        // Use a CORS proxy or your own API endpoint
        const res = await fetch('/api/feed'); // You'll need to create this API route
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Failed to fetch feed:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (loading) return <div>Loading blog posts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 gap-4">
      {posts.map((post, index) => (
        <Card 
          key={index}
          title={post.title} 
          description={post.description} 
          link={post.link} 
        />
      ))}
    </div>
  );
}