// src/components/Feed.tsx
import { useState, useEffect } from 'react';
import Card from './card';

interface BlogPost {
  title: string;
  description: string;
  link: string;
  pubDate?: string;
}

export default function FeedComponent() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Fetching feed from /api/feed...');
        const res = await fetch('/api/feed');
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        console.log('Feed data received:', data);
        
        // Check if the response is an error object
        if (data.error) {
          throw new Error(data.error + (data.details ? `: ${data.details}` : ''));
        }
        
        // Ensure data is an array
        if (!Array.isArray(data)) {
          throw new Error('Invalid feed data format');
        }
        
        setPosts(data);
        
      } catch (err) {
        console.error('Failed to fetch feed:', err);
        const errorMessage = err instanceof Error ? err.message : 'Failed to load blog posts';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-32 flex items-center justify-center">
        <div className="text-lg text-muted-foreground">Loading blog posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-4 border border-destructive/20 bg-destructive/5 rounded-lg">
        <div className="text-destructive font-medium mb-2">Error loading blog posts</div>
        <div className="text-sm text-muted-foreground">{error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-3 text-sm text-primary hover:underline"
        >
          Try again
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full h-32 flex items-center justify-center">
        <div className="text-lg text-muted-foreground">No blog posts found</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {posts.map((post, index) => (
        <Card 
          key={`${post.link}-${index}`}
          title={post.title} 
          description={post.description} 
          link={post.link} 
        />
      ))}
    </div>
  );
}