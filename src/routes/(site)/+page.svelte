<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index';
    import { SiSvelte,SiTypescript, SiVercel,
     } from '@icons-pack/svelte-simple-icons';
</script>

<main class="flex h-full w-full flex-col">
	<section id="Hero" class="flex flex-col items-center gap-2 text-center">
		<Avatar.Root class="size-32">
			<Avatar.Image src="https://github.com/karppa404.png" alt="@Karppa" />
			<Avatar.Fallback>KA</Avatar.Fallback>
		</Avatar.Root>
		<h1 class="text-4xl font-bold">👋🗿 hey! I am karppa.</h1>
		<p class=" text-current/30">
			I am a software engineer with a passion for building web applications. I love to share my
			knowledge through writing and showing off what I have done on this site.
		</p>
	</section>

    <section id="skills">

    </section>
</main>
