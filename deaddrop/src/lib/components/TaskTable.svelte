<script>
    // table of items
    // this is the table that contains rows of items
    // i want this to be able to take in data and convert it into a table
    // https://svelte.dev/repl/f04266dcd39c4024b1e89084aa549844?version=3.31.2
    export let tableData;
    import { styles } from '$lib/styles.js'

    const tableHeaders = Object.keys(tableData[0]);
    const columns = tableHeaders.length;


</script>
<div class="grid-container" use:styles={{columns}}>
    {#each tableHeaders as header}
        <div class="grid-item">{header}</div>
    {/each}
    {#each tableData as row}
        <div class="grid-item">{row.id}</div>
        <div class="grid-item">{row.first_name}</div>
        <div class="grid-item">{row.last_name}</div>
        <div class="grid-item">{row.age}</div>
        <div class="grid-item">{row.job_title}</div>
        <div class="grid-item">{row.country}</div>
    {/each}
</div>

<style>
    .grid-container{
        grid-template-columns: repeat(var(--columns), 1fr);
        display: grid;
        align-items: center;
        gap: 10px;
    }
    .grid-item{
        border: 1px solid black;
        padding: 10px;
        text-align: center;
    }
</style>