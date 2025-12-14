<script lang="ts">
	let { name, ico, link, desc } = $props<{
		name: string;
		ico: string;
		link: string;
		desc: string;
	}>();
	import { ExternalLink } from '@lucide/svelte';
</script>

<div class="bg-card-foreground/1 backdrop-blur-sm border border-accent/20 p-4 rounded-2xl flex flex-col w-full md:max-w-sm md:min-w-sm min-h-50 max-h-50 gap-2">
	<a href={'https://' + link} target="_blank">
		<div class="w-full inline-flex gap-5 items-center hover:bg-accent/20 rounded-xl p-2">
			<img
				src={ico}
				alt={`${name} icon`}
				class="transition-transform duration-300 ease-out hover:rotate-45 size-12 "
			/>
			<div class="flex flex-col gap-1">
				<h1 class="text-md font-semibold">
					{name}
				</h1>

				<div class="inline-flex gap-1 text-foreground/50 text-sm hover:underline">
					<ExternalLink class="size-5" />
					{link}
				</div>
			</div>
		</div>
	</a>

	<p class="text-sm text-foreground/50 text-wrap truncate line-clamp-4">{desc}</p>
</div>
