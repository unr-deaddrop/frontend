<script>
    import Context from "$lib/components/Context.svelte"
	import ComboBox from "$lib/components/ComboBox.svelte"
    let options = [
    	{ text: "Istanbul", value: "istanbul" },
        { text: "Seoul", value: "seoul", disabled: true },
  	]
    endpoint_list.forEach(endpoint => {
        console.log(endpoint)
        let option = {text: endpoint['id'], value: endpoint['id']}
        options.push(option)
    })
</script>

<Context>   
	<div class="stack">
	<ComboBox
		label="Endpoint"
		name="endpoint"
		placeholder="00000000-0000-0000-0000-000000000000"
		options={options}
	/>
</Context>

<style>
    
	.stack {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
</style>