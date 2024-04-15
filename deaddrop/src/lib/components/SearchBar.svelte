<script>
    export let searchString = ""
</script>


<div class="SearchBar">
    <input bind:value={searchString} type="text" placeholder="Search..." style = "flex:1;" />
</div>


<style>
    .SearchBar {
    
    display:flex;
    align-items: center;
    }

    input[type="text"] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 20px;
    }

</style>
