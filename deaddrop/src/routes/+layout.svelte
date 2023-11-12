<script>
    import Header from './Header.svelte';
    // this is where you put your dashboard or basically the things every page has which is the searchbar, nav bar, side bar etc
</script>

<div>
	<Header/>

	<main>
		<slot />
	</main>

</div>