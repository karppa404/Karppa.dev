<script lang="ts">
    import * as Card from '$lib/components/ui/card/index.js';
    import { Button } from '$lib/components/ui/button/index.js';
    import { Calendar, ArrowRight } from '@lucide/svelte';

    let {
        title,
        thumbnail,
        datePublished,
        link,
        description
    }: {
        title: string;
        thumbnail: string;
        datePublished: string;
        link: string;
        description?: string;
    } = $props();

    // Format the date string for better display
    const formattedDate = $derived(new Date(datePublished).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }));
</script>

<Card.Root
    class="group w-full overflow-hidden border-border transition-all duration-300 hover:border-primary/50 flex flex-col p-0"
>
    {#if thumbnail}
        <div class="relative aspect-video w-full overflow-hidden">
            <img 
                src={thumbnail} 
                alt={title} 
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>
    {/if}



    <Card.Footer class="p-4 flex flex-col items-start gap-2">
            <div class="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar class="size-4" />
            <time datetime={datePublished}>{formattedDate}</time>
        </div>
              <h1 class="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {title}
              </h1>

        {#if description}
            <Card.Description class="mt-2 line-clamp-3 leading-relaxed text-muted-foreground">
                {description}
            </Card.Description>
        {/if}
        <Button 
            variant="outline" 
            size="sm" 
            href={link} 
            target="_blank" 
            class="gap-2 group/btn"
        >
            Read on Substack
            <ArrowRight class="size-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
    </Card.Footer>
</Card.Root>