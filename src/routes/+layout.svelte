<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import { ModeWatcher } from "mode-watcher";
	let { children } = $props();
</script>

<svelte:head>
	<title>
		Karppa.dev
	</title>
	<link rel="icon" href={favicon} />
</svelte:head>

	<ModeWatcher />

<main class="w-full h-full flex flex-col bg-background p-2">
	{@render children()}
</main>
