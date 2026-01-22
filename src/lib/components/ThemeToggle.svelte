<script lang="ts">
 import SunIcon from "@lucide/svelte/icons/sun";
 import MoonIcon from "@lucide/svelte/icons/moon";
 
 import { toggleMode } from "mode-watcher";
 import { Button } from "$lib/components/ui/button/index.js";
</script>
 
<Button onclick={toggleMode} variant="ghost" size="icon-lg" >
 <SunIcon
  class=" scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90 w-full"
 />
 <MoonIcon
  class="absolute scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0 w-full"
 />
 <span class="sr-only">Toggle theme</span>
</Button>