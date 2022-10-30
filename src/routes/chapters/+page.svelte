<script lang="ts">
	import type { PageData } from './$types';
	import { Avatar } from '@brainandbones/skeleton';
	import Masonry from '$lib/components/Masonry.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>Chapters</title>
</svelte:head>
<h1 class="py-5">Chapters</h1>
<p class="my-5">
	Pi Phi Sigma has chapters all around the continental United States, and we are always looking to
	expand our reach. If you are interested in starting a chapter at your school, please <a
		href="mailto:piphisigmafoundation@gmail.com">contact us</a
	>.
</p>

<Masonry stretchFirst={true} gridGap={'1rem'} colWidth={'minmax(Min(20em, 100%), 1fr)'}>
	<div class="card overflow-hidden my-auto">
		<header>
			<img
				class="bg-black/50 w-full"
				alt="Stock college students walking along"
				src="https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80"
			/>
		</header>
		<div class="card-body">
			<article>
				<a href="/">
					<h2 class="text-primary-500">We're at SRU!</h2>
				</a>
				<p>
					Some Random University has our first chapter! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Ut ad dolor, harum praesentium deserunt quibusdam temporibus doloribus,
					ea id fuga explicabo earum quia eos officia? Fugiat explicabo pariatur sapiente
					asperiores?
				</p>
			</article>
		</div>
		<footer class="p-4 flex items-end space-x-4">
			<Avatar src="https://i.pravatar.cc/160?img=6" />
			<div class="flex-auto flex justify-between items-en">
				<h6 class="font-bold">By Rhys</h6>
				<small>On {new Date().toLocaleDateString()}</small>
			</div>
		</footer>
	</div>
	<div class="card overflow-hidden">
		<header>
			<img
				class="bg-black/50 "
				alt="Stock college students walking along"
				src="https://images.unsplash.com/photo-1567168544646-208fa5d408fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
			/>
		</header>
		<div class="card-body">
			<article>
				<a href="/">
					<h2 class="text-primary-500">Study tips</h2>
				</a>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad dolor, harum praesentium
					deserunt quibusdam temporibus doloribus, ea id fuga explicabo earum quia eos officia?
				</p>
			</article>
		</div>
		<footer class="p-4 flex justify-start items-end space-x-4">
			<Avatar src="https://i.pravatar.cc/160?img=5" />
			<div class="flex-auto flex justify-between">
				<h6 class="font-bold">By Jane</h6>
				<small>On {new Date().toLocaleDateString()}</small>
			</div>
		</footer>
	</div>
	<div class="card card-body">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quaerat cupiditate, aliquid
		ullam fugit architecto magni vero natus ipsum praesentium fugiat esse consequatur, at velit
		repellat modi. Aliquid, corrupti provident?
	</div>
    <div class="card">
		<img
			src="https://images.unsplash.com/photo-1618355776464-8666794d2520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
			alt="Graduating student"
		/>
		<div class="card-body">Scholarships for PFS New Orleans</div>
	</div>
	<div class="card">
		<img
			src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
		/>
		<div class="card-body">Graduation Pictures from Pi Phi Sigma</div>
	</div>
	<div class="card">
		<header class="card-header font-bold">Stressed about study?</header>
		<p class="card-body">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quaerat cupiditate, aliquid
			ullam fugit architecto magni vero natus ipsum praesentium fugiat esse consequatur, at velit
			repellat modi. Aliquid, corrupti provident?
		</p>
		<a href="/" class="card-footer">Read more</a>
	</div>

</Masonry>
