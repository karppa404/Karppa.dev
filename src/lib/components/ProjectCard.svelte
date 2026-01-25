<script lang="ts">
  let { 
    title, 
    img, 
    status, 
    projectSite, 
    projectRepo, 
    description 
  }: {
    title: string,
    img: string,
    status: "Inprogress" | "Maintenance" | "Archived",
    projectSite?: string,
    projectRepo: string,
    description: string
  } = $props();
  import {SiGithub} from "@icons-pack/svelte-simple-icons"
  import {Link} from "@lucide/svelte"
  // Map statuses to specific Tailwind colors
  const statusStyles = {
    Inprogress: { bg: "bg-green-400/20", dot: "bg-green-400", label: "In progress" },
    Maintenance: { bg: "bg-yellow-400/20", dot: "bg-yellow-400", label: "Maintained" },
    Archived: { bg: "bg-gray-400/20", dot: "bg-gray-400", label: "Archived" }
  };

  const currentStatus = $derived(statusStyles[status]);
</script>

<div class="flex flex-col gap-4 max-w-md">
  <enhanced:img 
    src={img} 
    alt="{title} thumbnail" 
    class="max-w-md aspect-video object-cover rounded-xl border border-accent/50"
  />

  <div class="flex items-center gap-3">
    <div class="flex items-center gap-2 px-3 py-1 rounded-full border border-accent {currentStatus.bg}">
      <span class="w-2 h-2 rounded-full {currentStatus.dot}"></span>
      <span class="text-xs font-medium">{currentStatus.label}</span>
    </div>

    <div class="flex gap-2 ml-auto">
      <a href={projectRepo} target="_blank" class="p-2 bg-card/20 rounded-lg hover:bg-card/10 transition-colors">
<SiGithub size={24}/>
      </a>
      {#if projectSite}
        <a href={projectSite} target="_blank" class="p-2 bg-card/20 rounded-lg hover:bg-card/10 transition-colors">
        <Link/>
        </a>
      {/if}
    </div>
  </div>

  <div class="space-y-1">
    <h3 class="text-2xl  lowercase">{title}</h3>
    <p class="text-sm text-accent-forground leading-relaxed italic">
      {description}
    </p>
  </div>
</div>