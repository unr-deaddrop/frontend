<script>
    // this should be a table specific to the task group.
    // this table should accept components via slots
    // https://blog.logrocket.com/comprehensive-guide-svelte-components-slots/

    // i should be able to finish the task page with this
    // i need to pass in the progressbar and buttons as slots

    // table of items
    // this is the table that contains rows of items
    // i want this to be able to take in data and convert it into a table
    // https://svelte.dev/repl/f04266dcd39c4024b1e89084aa549844?version=3.31.2

    // with the way it's implemented, all keys need to be present for the data to be structured correctly
    // is there a way for the data to be incomplete and still have it be structured correctly?

    // we also aren't able to use my beautiful progress bar in this. how do i make it modular enough to make it use custom components for metrics
    // do i need to make it modular enough or should i just make it enough for right now
    // i'm thinking that we can bind a particular component to a column
    import { styles } from '$lib/styles.js'
    export let tableData; // table data going in 
    // export let component_column; // the component going into a specific column (component, column)
    // let tableData = inData;

    const tableHeaders = Object.keys(tableData[0]);
    const columns = tableHeaders.length;
    let selectedHeader = "id";
    let asc = true;

    const sortByHeader = (header) => { 
        tableData = tableData.sort((obj1, obj2) => {
            return obj1[header].toString().localeCompare(obj2[header].toString(), undefined , {
                numeric: true,
                sensitivity: 'base'
                });
        });
        if (!asc){ tableData = tableData.reverse(); }
        selectedHeader = header;
    }



</script>
<slot name="RowHeader"/>
<slot name="Row"/>
<!-- <div class="grid-container" use:styles={{columns}}>
    {#each tableHeaders as header}
        <div class="grid-item" class:highlighted={selectedHeader === header} on:click={ () => { 
            asc = !asc;
            sortByHeader(header);
        }}>
            {header.replace("_", " ")}
            {#if header === selectedHeader}
                <span class="order-icon">
                    {@html asc ? "&#9661;" : "&#9651;"}
                </span>
            {/if}
        </div>
    {/each}
    {#each tableData as row}
        {#each Object.values(row) as cell}
            <div class="grid-item">{cell}</div>
        {/each}
    {/each}
</div> -->

<style>
    .grid-container{
        grid-template-columns: repeat(var(--columns), auto);
        display: grid;
        align-items: center;
        gap: 10px;
    }
    .grid-item{
        border: 1px solid black;
        padding: 10px;
        text-align: center;
    }
    .highlighted {
		color: #a60707;
	}
    .order-icon{
        cursor: pointer;
    }
</style>