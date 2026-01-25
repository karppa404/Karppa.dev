<script lang="ts">
	import { useQuery, useConvexClient } from 'convex-svelte';
	import { api } from '../convex/_generated/api.js';
	import { getIcon, getWeather, getSUBPosts } from '$lib/remote/feed.remote';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { SiBluesky, SiGithub, SiSubstack } from '@icons-pack/svelte-simple-icons';
	import ThemeToggle from '@/components/ThemeToggle.svelte';
	import { Eye } from '@lucide/svelte';
	import { Sun } from '@lucide/svelte';
	import ProjectCard from '@/components/ProjectCard.svelte';
	import NoPreview from "@/assets/NoPreviewAvailible.png"
	let iconPromise = getIcon();
	// 1. Reactive query (safe for SSR as it starts in a loading state)
	const viewQuery = $state(useQuery(api.views.getCount, {}));

	const formattedNum = $derived(
		Intl.NumberFormat('en-US', {
			notation: 'compact',
			compactDisplay: 'short'
		}).format(viewQuery.data)
	);
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
	<div class="mx-auto max-w-2xl space-y-8">
		<section id="hero">
			<div class="mb-6 flex items-center justify-between gap-4">
				<div class="flex items-center gap-3">
					<svelte:boundary>
						{#await iconPromise}
							<Avatar.Root class="size-20 flex-shrink-0">
								<Avatar.Fallback>KD</Avatar.Fallback>
							</Avatar.Root>
						{:then src}
							<Avatar.Root class="size-20 flex-shrink-0 rounded-2xl">
								<Avatar.Image {src} alt="Karppa.dev profile" />
								<Avatar.Fallback>KD</Avatar.Fallback>
							</Avatar.Root>
						{:catch error}
							<Avatar.Root class="size-20 flex-shrink-0 rounded-md">
								<Avatar.Fallback>KD</Avatar.Fallback>
							</Avatar.Root>
						{/await}
					</svelte:boundary>

					<div class="flex items-center gap-2">
						<h1 class="font-serif text-5xl font-light italic md:text-6xl">Karppa.dev</h1>
						<ThemeToggle />
					</div>
				</div>

				<div class="flex items-center gap-2 text-muted-foreground">
					<Eye class="size-5" />
					<svelte:boundary>
						{#if viewQuery.isLoading}
							<span class="text-sm">...</span>
						{:else if viewQuery.error}
							<span class="text-sm">--</span>
						{:else}
							<span class="text-sm font-medium">{formattedNum}</span>
						{/if}
					</svelte:boundary>
				</div>
			</div>

			<!-- Social Links -->
			<div class="mb-8 flex gap-3">
				<a
					href="https://github.com/karppa404"
					class="text-muted-foreground transition-colors hover:text-foreground"
					aria-label="GitHub"
				>
					<SiGithub size={20} />
				</a>
				<a
					href="https://substack.com/@karppa404"
					class="text-muted-foreground transition-colors hover:text-foreground"
					aria-label="Substack"
				>
					<SiSubstack size={20} />
				</a>
				<a
					href="https://bsky.app/profile/karppa.dev"
					class="text-muted-foreground transition-colors hover:text-foreground"
					aria-label="Bluesky"
				>
					<SiBluesky size={20} />
				</a>
			</div>
		</section>

		<section id="description" class="space-y-4">
			<!-- Location and Weather -->
			<div class="flex flex-wrap items-center gap-6">
				<div class="flex items-center gap-2 font-serif text-lg font-semibold">
					<span class="size-2 rounded-full bg-green-400" aria-hidden="true"></span>
					<span>Dallas, TX</span>
				</div>

				<svelte:boundary>
					{#await getWeather()}
						<div class="flex items-center gap-2 text-muted-foreground">
							<Sun class="size-5 text-amber-500 dark:text-amber-400" />
							<span>--°</span>
						</div>
					{:then temp}
						<div class="flex items-center gap-2">
							<Sun class="size-5 text-amber-500 dark:text-amber-400" />
							<span class="font-medium">{temp.temp}° F</span>
						</div>
					{:catch}
						<div class="flex items-center gap-2 text-muted-foreground">
							<Sun class="size-5 text-amber-500 dark:text-amber-400" />
							<span>--°</span>
						</div>
					{/await}
				</svelte:boundary>
			</div>

			<!-- Title and Description -->
			<div class="space-y-2">
				<h2 class="text-base font-bold">Computer Science Student @ UTD</h2>
				<p class="leading-relaxed text-muted-foreground">
					I am a web developer building in public. You can find all of my works here.
				</p>
			</div>
		</section>

		<section id="project" class="flex flex-col gap-5">
			<h1 class="font-serif text-4xl">Projects</h1>
			<p class="leading-relaxed text-muted-foreground">
			These are projects I am currently working on, maintainning, or have archived.
			</p>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 ">
			<svelte:boundary>

				<ProjectCard
					title="Tag.Maestro"
					img={NoPreview}
					status="Inprogress"
					projectRepo="https://github.com/karppa404/Tag.Maestro"
					description="A media tagging tool built with sveltekit & convex."
				/>

			</svelte:boundary>
			</div>
		</section>

		<section id="blog" class="flex flex-col"></section>
	</div>
</main>
