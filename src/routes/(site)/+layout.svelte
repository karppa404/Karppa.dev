<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import Navigation from '@/components/Navigation.svelte';
	import Footer from '@/components/Footer.svelte';
	import BreadCrumb from '@/components/BreadCrumb.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<main class="relative min-h-screen w-full flex flex-col items-center bg-background">
	<section class="flex w-full md:max-w-2xl flex-col flex-1">
		<header class="mb-10">
			<Navigation />
			<BreadCrumb/>
		</header>

		<div class="flex-1 w-full">
			{@render children()}
		</div>

		<footer class="w-full">
			<Footer />
		</footer>
	</section>
</main>
