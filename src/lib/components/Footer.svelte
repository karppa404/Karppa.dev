<script lang="ts">
	import { Twitter, Github} from '@lucide/svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { SiSubstack,SiX,SiGithub } from '@icons-pack/svelte-simple-icons';
</script>

<footer class="flex w-full flex-wrap items-start gap-4 py-6 justify-between">
	<hr class="w-full border-accent" />

	<div class="text-primary">
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
				<SiX size={18} />
			</a>
		</div>

		<div class="p-2 rounded-md bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition">
			<a
				href="https://github.com/karppa404"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub"
			>
				<SiGithub size={18}/>
			</a>
		</div>
		<div class="p-2 rounded-md bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition">
			<a
				href="https://substack.com/@karppa404?https://substack.com/@karppa404?"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Substack"
			>
				<SiSubstack size={18} />
			</a>
		</div>
	<ThemeToggle/>
	</div>
</footer>
