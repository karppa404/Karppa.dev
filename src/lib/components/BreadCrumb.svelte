<script lang="ts">
	import { page } from '$app/state';
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";

	const breadcrumbs = $derived(
		page.url.pathname
			.split('/')
			.filter(segment => segment !== '')
			.reduce((acc, segment) => {
				const path = acc.length ? `${acc[acc.length - 1].href}/${segment}` : `/${segment}`;
				acc.push({ label: segment, href: path });
				return acc;
			}, [] as Array<{ label: string; href: string }>)
	);
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
		</Breadcrumb.Item>
		{#each breadcrumbs as breadcrumb, i}
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
					<Breadcrumb.Link href={breadcrumb.href}>{breadcrumb.label}</Breadcrumb.Link>
			</Breadcrumb.Item>
		{/each}
	</Breadcrumb.List>
</Breadcrumb.Root>