<script lang="ts">
	import Footer from '@/components/Footer.svelte';
	let { children } = $props();
</script>





<main class="relative min-h-screen w-full flex flex-col items-center bg-background">
	<section class="flex w-full md:max-w-3xl flex-col flex-1 md:justify-end justify-center">

		<div class="flex-1 w-full">
			{@render children()}
		</div>

		<footer class="w-full">
			<Footer />
		</footer>
	</section>
</main>
