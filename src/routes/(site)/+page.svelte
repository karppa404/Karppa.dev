<script lang="ts">
    import * as Avatar from '$lib/components/ui/avatar/index';
    import ProjectCard from '@/components/ProjectCard.svelte';
    import BlogPost from '@/components/BlogCard.svelte'; // Import your new component
    import { getSUBPosts } from '@/remote/data.remote'; // Import the query function
    import {
        SiSvelte,
        SiTypescript,
        SiVercel,
    } from '@icons-pack/svelte-simple-icons';

    // Call the query function
const postsPromise = getSUBPosts();
</script>

<main class="flex h-full w-full flex-col gap-8 transition-all">
    <section id="Hero" class="flex w-full flex-col items-center gap-4 text-center md:flex-wrap md:text-start">
        <Avatar.Root class="size-32 ring-2 ring-primary">
            <Avatar.Image src="https://github.com/karppa404.png" alt="@Karppa" />
            <Avatar.Fallback>KA</Avatar.Fallback>
        </Avatar.Root>
        <div class="flex w-full flex-col md:w-2/3">
            <h1 class="text-4xl font-bold">👋 Hey! I am karppa.</h1>
            <p class="text-wrap text-muted-foreground">
                I am a webdeveloper building in public. You can find all of works here. You can also contact
                me bellow.
            </p>
        </div>
    </section>

    <section class="flex flex-col gap-2">
        <h1 class="text-4xl font-bold">Projects:</h1>
		        <p class="text-muted-foreground">
These are projects that I work on for experience with a focuse on Full stack webdev.
				</p>
        <div class="grid h-fit w-full grid-cols-1 md:grid-cols-2 gap-2">
            <ProjectCard
                name="Karppa.party"
                repoLink="https://github.com/karppa404/karppa.party"
                link="https://karppa.party"
                desc="As a learning endever I setout to learn full stack development through the creation of karppa.party."
                date="January 1, 2026"
                techStack={[{ icon: SiSvelte }, { icon: SiVercel}, { icon: SiTypescript }]}
            />
        </div>
    </section>

    <section class="flex flex-col gap-4 mt-8">
        <div class="flex flex-col gap-2">
            <h1 class="text-4xl font-bold">Writing:</h1>
            <p class="text-muted-foreground">
                Thoughts on software, or whatever else I'm building.
            </p>
        </div>

        {#await postsPromise}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p class="text-muted-foreground animate-pulse">Fetching latest posts...</p>
            </div>
        {:then posts}
            <div class="grid h-fit w-full grid-cols-1 md:grid-cols-2 gap-4">
                {#each posts as post}
                    <BlogPost 
                        title={post.title}
                        thumbnail={post.thumbnail}
                        datePublished={post.datePublished}
                        link={post.link}
                        description={post.description}
                    />
                {/each}
            </div>
        {:catch error}
            <p class="text-destructive">Failed to load posts: {error.message}</p>
        {/await}
    </section>
</main>