<script>
	import { onMount } from 'svelte';

	let onScreen;

	onMount(async () => {
		const test_proxy = await fetch(`http://backend.localhost/backend/`, {
			method: 'GET',
			headers: {
			  "Content-Type": "application/json",
			}
		});
		let json = test_proxy.json();
		console.log(JSON.stringify(json))
		onScreen = JSON.stringify(json)
	});
</script>

test_proxy
{onScreen}
<style>
</style>