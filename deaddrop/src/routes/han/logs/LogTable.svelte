<script>
    import { styles } from '$lib/styles.js'
    import ProgressBar from './ProgressBar.svelte';
    export let tableData; // table data going in
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

    let headerData;



</script>
<div class="grid-container" use:styles={{columns}}>
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
        <!-- <a href={"./tasks/" + row["id"]}> -->
            {#each Object.keys(row) as cell}
                <a href={"./logs/" + row["id"]} class="grid-item">
                    {#if cell == 'progress'}
                        <ProgressBar progress={row[cell]/100}/>
                        {row[cell]}
                    {:else}
                        {row[cell]}
                    {/if}
                </a>
            {/each}
        <!-- </a> -->
    {/each}
</div>

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