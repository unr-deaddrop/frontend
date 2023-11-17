<script>
	import '../app.scss';
	import Header from './Header.svelte';
	import SideBar from './SideBar.svelte';
</script>

<div class="container">
	<Header />
	<div class="divider">
		<div class="sidebar">
			<SideBar />
		</div>
		<main class="content">
			<slot />
		</main>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.divider {
		display: flex;
		flex-direction: row;
		flex: 1;
	}

	/*adjust sidebar size and content size here */
	.sidebar {
		flex: 0.25;
	}

	.content {
		flex: 1;
	}
</style>
