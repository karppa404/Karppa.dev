<script lang="ts">
	import { Twitter, Github, Twitch, Youtube } from '@lucide/svelte';
</script>

<footer class="flex w-full flex-wrap items-baseline gap-4 py-6 justify-between">
	<hr class="w-full border-accent" />

	<div>
		© {new Date().getFullYear()} karppa.dev
	</div>

	<div class="flex gap-3">
		<div class="p-2 rounded-md bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition">
			<a
				href="https://x.com/OmniKarp"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Twitter"
			>
				<Twitter class="size-8" />
			</a>
		</div>

		<div class="p-2 rounded-md bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition">
			<a
				href="https://github.com/karppa404"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub"
			>
				<Github class="size-8" />
			</a>
		</div>

		<div class="p-2 rounded-md bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition">
			<a
				href="https://www.twitch.tv/karppa404"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Twitch"
			>
				<Twitch class="size-8" />
			</a>
		</div>

		<div class="p-2 rounded-md bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition">
			<a
				href="https://www.youtube.com/@Karpppa"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="YouTube"
			>
				<Youtube class="size-8" />
			</a>
		</div>
	</div>
</footer>
