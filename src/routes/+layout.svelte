<script lang="ts">
    import './layout.css';
    import favicon from '$lib/assets/tiny.png';
    import { ModeWatcher } from "mode-watcher";
    import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'

    let { children } = $props();
    const queryClient = new QueryClient()

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Karppa.dev</title>
</svelte:head>
<ModeWatcher />

<QueryClientProvider client={queryClient}>
    {@render children?.()}
</QueryClientProvider>
