<script lang="ts">
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
import Subscribe from './Subscribe.svelte';

	interface Links {
		name: string;
		url: string;
	}
	const links: (Links | string)[] = [
		'Links',
		{
			name: 'GitHub',
			url: 'https://github.com/ryceg/pi-phi-sigma'
		}
	];
</script>

<footer>
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-wrap md:text-left text-center justify-evenly">
			<div class="lg:w-1/4 md:w-1/2 w-full px-4">
				<nav class="list-none mb-10 text-sm">
					{#each links as link}
						{#if typeof link === 'string'}
							<span class="font-light title-font tracking-widest text-sm mb-4"
								>{link}</span
							>
						{:else}
							<li>
								<a href={link.url}>{link.name}</a>
							</li>
						{/if}
					{/each}
				</nav>
			</div>
			<Subscribe />
		</div>
	</div>

	<div class="bg-surface-100">
		<div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
			<a
				href="/"
				class="hidden sm:flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
			>
				<img src="/PFS PNG Small.png" alt="PFS Logo" class="w-10" />
				<span class="ml-3 text-xl">Pi Phi Sigma</span>
			</a>
			<p class="text-xs text-gray-500 sm:ml-6 sm:mb-0 mb-4">
				Built with {'<3'} © 2022 Rhys Gray
				<a
					href="https://twitter.com/rhyscgray"
					rel="noopener noreferrer"
					target="_blank">@rhyscgray</a
				>
			</p>
			<span class="inline-flex sm:ml-auto gap-2 sm:gap-4 sm:mb-0 mb-4 justify-center sm:justify-start">
				<a href='https://google.com'>
					<SvgIcon name='facebook' />
				</a>
				<a href='https://google.com'>
					<SvgIcon name='twitter' />
				</a>
				<!-- linkedin -->
				<a href='https://google.com'>
					<SvgIcon name='linkedin' />
				</a>
			</span>
		</div>
	</div>
</footer>
