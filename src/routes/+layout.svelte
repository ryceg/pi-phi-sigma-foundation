<script type="ts">
	import '../theme.postcss';
	import '../app.postcss';
	import '@brainandbones/skeleton/styles/forms.css';
	import '@brainandbones/skeleton/styles/all.css';
	import { AppShell, AppBar, menu, Drawer } from '@brainandbones/skeleton';
	import Footer from './Footer.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import { writable } from 'svelte/store';
	import NavMenu from './NavMenu.svelte';
	$: sidebarOpen = writable(false);
	function drawerOpen() {
		sidebarOpen.set(true);
	}
	function drawerClose() {
		sidebarOpen.set(false);
	}
	function handleDrawer(menu: string, state: boolean) {
		console.log('handleDrawer', menu, state);
	}
</script>

<Drawer open={sidebarOpen}>
	Test
	<NavMenu />
</Drawer>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button on:click={drawerOpen} class="lg:hidden mr-2 p-1 cursor-pointer">
					<SvgIcon name="bars" width="w-6" height="h-6" fill="fill-black dark:fill-white" />
				</button>
				<div class="md:flex-row container flex flex-col flex-wrap items-center p-5 mx-auto">
					<a class="title-font md:mb-0 flex items-center mb-4 font-medium text-gray-900" href="./">
						<img src="/PFS PNG Small.png" alt="PFS Logo" class="w-10" />
						<span class="hidden sm:block ml-3 text-xl">Pi Phi Sigma</span>
					</a>
				</div>
			</svelte:fragment>
			<!-- (center) -->
			<svelte:fragment slot="trail">
				<!-- Use a wrapping .relative class to confine the menu position -->
				<span class="relative hidden lg:inline">
					<!-- Trigger: apply the 'use:menu' action and supply the unique menu ID -->
					<button class="btn" use:menu={{ menu: 'navigation-menu' }}>Menu</button>
					<NavMenu />
				</span>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft" />
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<!-- Router Slot -->
	<div class='p-4 sm:px-8 max-w-5xl place-content-center mx-auto'>
		<slot />
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>