<script lang="ts">
    import { ExternalLink } from '@lucide/svelte';
    import { Github } from '@lucide/svelte';
    let { name, link, desc } = $props<{ name: string; link: string; desc?: string }>();
</script>

<div
	class="bg-card-foreground/5 backdrop-blur-sm border border-accent/20 rounded-2xl p-4 flex flex-col gap-3 w-full"
>
	<a href={'https://github.com/karppa404/' + name} target="_blank" rel="noopener noreferrer" class="group">
		<div
			class="flex-col items-center gap-4 rounded-xl p-2 transition-colors group-hover:bg-accent/20"
		>
			<div class="inline-flex gap-5">
			<Github
				class="size-6 shrink-0 transition-transform duration-300 ease-out group-hover:rotate-12"
			/>
				<h1 class="text-base font-semibold truncate">{name}</h1>
			</div>


			<div class="flex flex-col gap-1 min-w-0">
				<div class="flex items-center gap-1 text-sm text-foreground/50 truncate">
					<ExternalLink class="size-4 shrink-0" /> <span class="truncate">{link}</span>
				</div>
			</div>
		</div>
	</a>
	<p class="text-sm text-foreground/50 line-clamp-4">{desc}</p>
</div>
