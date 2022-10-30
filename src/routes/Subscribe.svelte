<script lang="ts">
	import { enhance } from "$app/forms";


</script>

<form use:enhance class="lg:w-1/4 md:w-1/2 w-full px-4">
	<h2 class="hidden sm:inline title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Subscribe <span class='hidden md:inline'>to our Mailing List</span></h2>
	<div
		class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start"
	>
		<div class="relative sm:w-auto">
			<label for="footer-field" class="leading-7 text-sm text-gray-600">Email</label>
			<input
				type="text"
				id="footer-field"
				name="footer-field"
				class="w-full"
			/>
		</div>
		<button
			class="btn"
			>Subscribe</button
		>
	</div>
	<p class="hidden sm:block text-surface-500 text-sm mt-2 md:text-left text-center">We promise we don't spam.</p>
</form>
