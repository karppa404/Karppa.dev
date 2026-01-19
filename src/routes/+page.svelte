<script lang="ts">
  import { useQuery, useConvexClient } from 'convex-svelte';
  import { api } from '../convex/_generated/api.js';

  // 1. Reactive query (safe for SSR as it starts in a loading state)
  const viewQuery = useQuery(api.views.getCount, {});
  
  // 2. Get the direct client
  const client = useConvexClient();

  // 3. Trigger mutation on mount using Svelte 5's $effect
  $effect(() => {
    // This code only runs in the browser
    client.mutation(api.views.incrementView, {})
      .catch(err => console.error("Failed to update view count:", err));
  });
</script>

{#if viewQuery.isLoading}
  <p>Loading views...</p>
{:else if viewQuery.error}
  <p>Error loading views: {viewQuery.error}</p>
{:else}
  <p>Current views: {viewQuery.data}</p>
{/if}