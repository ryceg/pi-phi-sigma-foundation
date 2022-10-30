<script lang="ts">
	import { swipe } from '$lib/actions/swipe';
	import { onMount } from 'svelte';
	import {
		quartOut,
		quartIn,
		expoIn,
		expoOut,
		expoInOut,
		linear,
		backOut,
		circIn
	} from 'svelte/easing';
	let show = false;
	onMount(() => {
		show = true;
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="The landing page for the Pi Phi Sigma fraternity" />
</svelte:head>

<header
	class="w-full h-96 bg-cover bg-center justify-center items-center bg-[url(https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)]"
>
	<div class="flex flex-col justify-center items-center">
		<h1
			class=" my-5 text-2xl sm:text-5xl md:text-6xl py-6 font-extrabold text-surface-900 tracking-wider"
		>
			{#if show}
				<span transition:swipe={{ easing: quartIn, duration: 400 }} class="bg-primary-500 p-2"
					>Pi</span
				>
				<span
					transition:swipe={{ delay: 400, easing: circIn, duration: 400 }}
					class="bg-accent-500 p-2">Phi</span
				>
				<span
					transition:swipe={{ delay: 800, easing: quartOut, duration: 2600 }}
					class="bg-ternary-500 p-2">Sigma</span
				>
			{/if}
		</h1>
		<div class=" text-center text-lg text-surface-50 opacity-80">
			The newest international music charitable fraternity.
		</div>
	</div>
</header>
<div class="p-4">
	<p class="py-12 text-base">
		Pi Phi Sigma, inc. is a startup Greek letter foundation for philanthropic and professional
		support, created by and for musicians and music students. We are organizing as a Delaware
		non-stock corporation, pending certification as a 501(c)(3) nonprofit
	</p>
</div>
