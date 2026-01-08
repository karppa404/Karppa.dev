<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Calendar, ExternalLink } from '@lucide/svelte';
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
	import type { Component } from 'svelte';

	let {
		name,
		link,
		repoLink,
		desc,
		date,
		status,
		techStack = []
	}: {
		name: string;
		status: 'In Progress' | 'Maintenance' | 'Archive';
		link?: string;
		repoLink?: string;
		desc: string;
		date?: string;
		techStack?: Array<{
			icon: Component<any>; // Using any here to allow icon-specific props
			size?: number | string; // Add size here
		}>;
	} = $props();
</script>

<Card.Root
	class="group w-full overflow-hidden border-border transition-all duration-300 hover:border-primary/50"
>
	<Card.Header>
		<Card.Title class="text-md font-bold">{name}</Card.Title>
		<Card.Description class="leading-relaxed text-muted-foreground">
			{desc}
		</Card.Description>
		<div class="inline-flex justify-between">
{#if date}
			<div class="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
				<Calendar class="size-4" />
				<time>{date}</time>
			</div>
		{/if}
		<Badge
			variant={status === 'In Progress'
				? 'default'
				: status === 'Maintenance'
					? 'secondary'
					: 'destructive'}
			class="flex items-center gap-1.5 px-3 py-1"
		>
			Status: {status}
		</Badge>
		</div>
		
	</Card.Header>

	{#if techStack.length > 0 || repoLink || link}
		<Card.Footer class="flex w-full flex-col items-start gap-2">
			{#if techStack.length > 0}
				<div class="flex flex-1 flex-wrap gap-2">
					{#each techStack as tech}
						<Badge variant="outline" class="flex items-center gap-1.5 px-3 py-1">
							{@const Icon = tech.icon}
							<Icon size={tech.size ?? 16} />
						</Badge>
					{/each}
				</div>
			{/if}
			<div class="inline-flex gap-2">
				{#if repoLink}
					<Button variant="outline" size="sm" href={repoLink} class="gap-2">
						<SiGithub />
						Repository
					</Button>
				{/if}
				{#if link}
					<Button variant="outline" size="sm" href={link} class="gap-2 bg-accent">
						<ExternalLink class="size-4" />
						Project Link
					</Button>
				{/if}
			</div>
		</Card.Footer>
	{/if}
</Card.Root>
