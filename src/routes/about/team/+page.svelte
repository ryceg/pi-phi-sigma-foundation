<script lang="ts">
	import faker from '@faker-js/faker';
	export let teamMembers: {
		name: string;
		position: string;
		funFact: string;
		photo: {
            src: string
            alt: string
        };
	}[] = [
		{
			name: 'Rhys Gray',
			position: 'Web Designer',
			funFact: 'Rhys has three guinea pigs!',
			photo: {
				src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
				alt: 'Placeholder cat'
			}
		}
	];

	for (let i = 0; i < 5; i++) {
		teamMembers.push({
			name: faker.faker.name.fullName(),
			position: faker.faker.name.jobTitle(),
			funFact: faker.faker.lorem.sentence(),
			photo: {
				src: faker.faker.image.avatar(),
				alt: faker.faker.lorem.sentence()
			}
		});
	}
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
				Pi Phi Sigma is made up of a diverse range of passionate music lovers.
			</p>
		</div>
		<div class="flex flex-wrap -m-2">
			{#each teamMembers as member}
				<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
					<div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
						<img
							alt={member.photo.alt || 'team'}
							class="w-16 h-16 bg-surface-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
							src={member.photo.src || 'https://dummyimage.com/80x80'}
						/>
						<div class="flex-grow">
							<h2 class="text-gray-900 title-font font-medium">
								{member.name || 'Holden Caulfield'}
							</h2>
							<p class="text-gray-500">{member.position || 'Captain of the Canterbury'}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
