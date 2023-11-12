<script>
    /** @type {import('./$types').LayoutData} */
    export let data;
    import SearchBar from './SearchBar.svelte';
    // this is where you put your dashboard or basically the things every page has which is the searchbar, nav bar, side bar etc
</script>

<div>
	
	<main>
		<slot />
	</main>

</div>