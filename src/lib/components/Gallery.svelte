<script lang="ts">
	import faker from '@faker-js/faker';
	export let title: string;
	export let description: string;
	export let images: {
		src: string;
		alt: string;
	}[];

	if (images.length === 0) {
		for (let i = 0; i < 10; i++) {
			images.push({
				src: faker.image.business(),
				alt: faker.lorem.sentence()
			});
		}
	}
</script>

<section class="body-font text-gray-600">
	<div class="container flex flex-wrap px-5 py-24 mx-auto">
		<span class="flex flex-wrap w-full mb-20">
			<h1 class="sm:text-3xl title-font lg:w-1/3 lg:mb-0 mb-4 text-2xl font-medium text-gray-900">
				{title || 'Impressive Title'}
			</h1>
			<p class="lg:pl-6 lg:w-2/3 mx-auto text-base leading-relaxed">
				{description || 'The description goes here!'}
			</p>
		</span>
		<span class="md:-m-2 flex flex-wrap -m-1">
			<span class="flex flex-wrap">
				{#each images as image, i}
					{#if i % 2 === 0}
						<span class="md:w-1/2 lg:w-1/3 w-full p-1">
							<img
								alt={image.alt || faker.company.bs()}
								class="block object-cover object-center w-full h-full"
								src={image.src || faker.image.business()}
							/>
						</span>
					{:else}
						<span class="md:p-2 p-1">
							<img
								alt={image.alt || faker.company.bs()}
								class="block object-cover object-center w-full h-full"
								src={image.src || faker.image.business()}
							/>
						</span>
					{/if}
				{/each}
			</span>
		</span>
		<!-- <div class="md:-m-2 flex flex-wrap -m-1">
			<div class="lg:w-1/3 sm:w-1/2 p-4">
				{#each images as image}
					<div class="md:p-2 w-1/2 p-1">
						<img
							alt={image.alt || faker.company.bs()}
							class="block object-cover object-center w-full h-full"
							src={image.src || faker.image.business()}
						/>
					</div>
				{/each}
			</div>
		</div> -->
	</div>
</section>
