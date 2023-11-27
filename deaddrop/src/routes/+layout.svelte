<script>
	import '../app.scss';
	import Header from '$lib/components/Header.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
</script>

<div class="container">
	<div class = "divider"> 
		<div class ="sidebar">
			<SideBar/>
		</div>
		<div class = "content">
				<Header/>
			<div class = "content"> 
				<main>
					<slot/>
				</main>
			</div>
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
	  height: 100vh;
	}
  
	.content {
	  flex: 1;
	  background-color: #e6e6e6;
	}
  </style>
  

