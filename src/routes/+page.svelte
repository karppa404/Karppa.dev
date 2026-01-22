<script lang="ts">
	import { useQuery, useConvexClient } from 'convex-svelte';
	import { api } from '../convex/_generated/api.js';
	import { getIcon } from '$lib/remote/feed.remote';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { SiBluesky, SiGithub, SiSubstack } from '@icons-pack/svelte-simple-icons';
	import ThemeToggle from '@/components/ThemeToggle.svelte';
	import { Eye } from '@lucide/svelte';

	let iconPromise = getIcon();
	// 1. Reactive query (safe for SSR as it starts in a loading state)
	const viewQuery = $state(useQuery(api.views.getCount, {}))
	
	const formattedNum = $derived(Intl.NumberFormat('en-US', {
		notation: 'compact',
		compactDisplay: 'short'
	}).format(viewQuery.data)) 
	// 2. Get the direct client
	const client = useConvexClient();

	// 3. Trigger mutation on mount using Svelte 5's $effect
	$effect(() => {
		// This code only runs in the browser
		client
			.mutation(api.views.incrementView, {})
			.catch((err) => console.error('Failed to update view count:', err));
	});
</script>

<main class="flex h-full flex-col">
	<section id="hero" class=" max-w-2xl min-w-2xl">
		<div class="inline-flex h-fit w-full items-center justify-between">
			<div class="inline-flex items-center">
				{#await iconPromise}
					<Avatar.Root class="size-12">
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
				{:then src}
					<Avatar.Root class="size-12">
						<Avatar.Image {src} alt="@shadcn" />
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
				{:catch error}
					<p>Error loading image: {error.message}</p>
				{/await}
				<h1 class="font-serif text-5xl font-bold italic">Karppa.dev</h1>

				<ThemeToggle />
			</div>
			<div class="inline-flex gap-2">
				<Eye />
				{#if viewQuery.isLoading}
					<p>.</p>
				{:else if viewQuery.error}
					<p>Error loading views: {viewQuery.error}</p>
				{:else}
					<p>{formattedNum}</p>
				{/if}
			</div>
		</div>
		<div class="inline-flex gap-3">
			<a href="https://bsky.app/profile/karppa.dev">
				<SiBluesky size={20}/>
			</a>
			<a href="https://substack.com/@karppa404?">
				<SiSubstack size={20}/>
			</a>
			<a href="https://github.com/karppa404">
				<SiGithub size={20}/>
			</a>
		</div>
	</section>
</main>


