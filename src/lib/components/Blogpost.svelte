<script lang="ts">
	let { img, title, date, link } = $props();
</script>

<a
	href={link}
	target="_blank"
	class=" relative block w-full h-[22rem] rounded-2xl overflow-hidden group"
>
	<!-- Background image -->
	<img
		src={img}
		alt={title}
		class=" absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
	/>

	<!-- Gradient overlay -->
	<div class=" absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

	<!-- Content -->
	<div class=" relative z-10 h-full flex flex-col justify-end p-6 text-white">
		<h1 class="text-2xl font-semibold leading-tight max-w-xl">
			{title}
		</h1>

		<p class="mt-2 text-sm text-white/80">
			{date}
		</p>
	</div>
</a>
