<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	let currentRoute = $derived(page.url.pathname);
</script>

<nav
	class="inline-flex h-fit w-full items-baseline justify-between bg-background/40 pb-2 md:pt-14 backdrop-blur-lg"
>
	<div class=" text-xl font-black"><a href={resolve('/')}> Karppa </a></div>

	<div class="inline-flex items-baseline gap-4 text-foreground/50">
		<a
			href={resolve('/projects')}
			class="transition-colors"
			class:text-foreground={currentRoute === '/projects'}
		>
			Projects
		</a>

		<a
			href={resolve('/writings')}
			class="transition-colors"
			class:text-foreground={currentRoute === '/writings'}>Writing</a
		>

		<ThemeToggle />
	</div>
</nav>
