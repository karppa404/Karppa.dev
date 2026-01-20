<script lang="ts">
  import { useQuery, useConvexClient } from 'convex-svelte';
  import { api } from '../convex/_generated/api.js';
  import {getIcon} from '$lib/remote/feed.remote'
  import * as Avatar from "$lib/components/ui/avatar/index.js";
let iconPromise = getIcon();
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

{#await iconPromise}
    <Avatar.Root>
      <Avatar.Image src={""} alt="@shadcn" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    
    </Avatar.Root> 
{:then src}
<Avatar.Root>
  <Avatar.Image src={src} alt="@shadcn" />
  <Avatar.Fallback>CN</Avatar.Fallback>

</Avatar.Root>
{:catch error}
  <p>Error loading image: {error.message}</p>
{/await}

{#if viewQuery.isLoading}
  <p>Loading views...</p>
{:else if viewQuery.error}
  <p>Error loading views: {viewQuery.error}</p>
{:else}
  <p>Current views: {viewQuery.data}</p>
{/if}


WORK IN PROG