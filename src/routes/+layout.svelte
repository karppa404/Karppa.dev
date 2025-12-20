<script lang="ts">
    import './layout.css';
    import favicon from '$lib/assets/tiny.png';
    import { ModeWatcher } from "mode-watcher";


    let { children } = $props();


</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Karppa.dev</title>
</svelte:head>
<ModeWatcher />
    {@render children?.()}
