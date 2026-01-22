<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';
	import { ModeWatcher } from 'mode-watcher';

	const { children } = $props();
	setupConvex(PUBLIC_CONVEX_URL);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ModeWatcher />
<main class="w-full h-full min-h-screen flex flex-col items-center justify-center">
    {@render children()}

</main>
