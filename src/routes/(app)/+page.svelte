<script lang="ts">
	import Github from '@lucide/svelte/icons/github';
	import Bookmark from '@lucide/svelte/icons/bookmark';
	import Twitter from '@lucide/svelte/icons/twitter';
	import ProjectCard from '@/components/ProjectCard.svelte';
	import Blogpost from '@/components/Blogpost.svelte';
	import ThemeToggle from '@/components/ThemeToggle.svelte';
	import TinyIco from '@/assets/tiny.png';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
</script>

<!-- https://avatars.githubusercontent.com/u/67647083?v=4 -->
<main class="min-h-screen px-4 py-8 md:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="flex flex-col md:flex-row gap-10 md:gap-16">
			<!-- LEFT COLUMN -->
			<section
				class="w-full md:w-80 space-y-6
		   flex flex-col items-center text-center
		   md:items-start md:text-left
		   md:sticky md:top-14 md:self-start"
			>
				<div class="space-y-4 w-full md:w-auto">
					<Avatar.Root class="size-60 border border-accent/30 mx-auto md:mx-0">
						<Avatar.Image src="https://github.com/karppa404.png" alt="@karppa404" />
						<Avatar.Fallback>KA</Avatar.Fallback>
					</Avatar.Root>

					<h2 class="text-2xl font-medium">👋 hey! I am karppa</h2>

					<p class="text-sm opacity-70 leading-relaxed">
						I am a developer building web tools in public. You can find my works here.
					</p>

					<div class="flex items-center justify-center md:justify-start gap-3">
						<a href="https://github.com/karppa404" class="hover:opacity-70">
							<Github class="w-4 h-4" />
						</a>

						<a href="https://substack.com/@karppa404" class="hover:opacity-70">
							<Bookmark class="w-4 h-4" />
						</a>

						<a href="https://x.com/OmniKarp" class="hover:opacity-70">
							<Twitter class="w-4 h-4" />
						</a>

						<ThemeToggle />
					</div>

					<p class="text-sm opacity-50">📍 Dallas, Texas</p>
				</div>
			</section>

			<!-- RIGHT COLUMN -->
			<section class="flex-1 space-y-16">
				<!-- PROJECTS -->
				<div class="space-y-6">
					<div class="flex items-center gap-4">
						<h3 class="text-sm font-medium">Projects</h3>
						<div class="flex-1 h-px bg-current opacity-20" />
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
						<ProjectCard
							name="Audio"
							ico={TinyIco}
							link="github.com/karppa404"
							desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						/>

						<ProjectCard
							name="Audio"
							ico={TinyIco}
							link="github.com/karppa404"
							desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						/>

						<ProjectCard
							name="Audio"
							ico={TinyIco}
							link="github.com/karppa404"
							desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						/>

						<ProjectCard
							name="Audio"
							ico={TinyIco}
							link="github.com/karppa404"
							desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						/>
					</div>
				</div>

				<!-- BLOG POSTS -->
				<div class="space-y-6">
					<div class="flex items-center gap-4">
						<h3 class="text-sm font-medium">Blog posts</h3>
						<div class="flex-1 h-px bg-current opacity-20" />
					</div>

					<div class="space-y-6">
						<Blogpost
							img="https://w.wallhaven.cc/full/je/wallhaven-je82zp.jpg"
							title="Very interesting name for an article I will totally write"
							date="October 30, 2026"
							link="https://substack.com/home/post/p-181380242"
						/>

						<Blogpost
							img="https://w.wallhaven.cc/full/je/wallhaven-je82zp.jpg"
							title="Very interesting name for an article I will totally write"
							date="October 30, 2026"
							link="https://substack.com/home/post/p-181380242"
						/>
					</div>
				</div>
			</section>
		</div>
	</div>
</main>
