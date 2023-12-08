<script>
	import '../../app.scss';
	import Header from '$lib/components/Header.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
</script>

<div class="container">
	<div class="divider">
		<div class="sidebar">
			<SideBar/>
		</div>
		<div class="content">
			<Header/>
			<main>
				<slot/>
			</main>
		</div>
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

	.sidebar {
		flex: 0.15;
	}

	.sidebar_footer {
		flex: 0.15;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #a60707;
	}

	.content {
		flex: 1;
		flex-direction: column;
		background-color: #e6e6e6;
		height: 100vh;
		overflow-y: auto; /* Enable vertical scrolling */
	}
</style>
