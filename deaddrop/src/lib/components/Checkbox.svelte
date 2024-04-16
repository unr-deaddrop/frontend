<script>
    export let checked = false;
    export let label_name = "";
</script>
<label>
    {label_name}
    <input type="checkbox" name="check" id="check" bind:checked={checked}>
</label>
<style>
label{
    color: black;
}

input {
		margin: 0;
		padding: 0.8rem 1rem;
		border: 0.175rem solid gray;
		border-radius: 0.3rem;
	}

</style>