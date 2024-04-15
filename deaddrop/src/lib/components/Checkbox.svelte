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

</style>