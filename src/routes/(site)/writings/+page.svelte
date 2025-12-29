<script lang="ts">
	import { Github, Twitter, MapPin } from '@lucide/svelte';
</script>

<section class="max-w-xl text-left">
	<!-- Heading -->
	<h1 class="flex items-center gap-2 text-2xl font-semibold">👋🗿 hey! I am karppa</h1>

	<!-- Description -->
	<p class="mt-2 text-sm leading-relaxed opacity-70">
	I am a web developer with an interest in building
	</p>

	<!-- Links -->
	<div class="mt-4 flex items-center gap-4 opacity-80">
		<a href="https://github.com/karppa404" aria-label="GitHub" class="hover:opacity-100">
			<Github class="h-5 w-5" />
		</a>
		<a href="https://x.com/OmniKarp" aria-label="Twitter" class="hover:opacity-100">
			<Twitter class="h-5 w-5" />
		</a>

	</div>

	<!-- Location -->
	<div class="mt-4 flex items-center gap-2 text-sm opacity-60">
		<MapPin class="h-4 w-4" />
		<span>Dallas, Texas</span>
	</div>
</section>
