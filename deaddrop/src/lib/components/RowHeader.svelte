<script>
    import { styles } from '$lib/styles.js'
    export let headerData; // table data going in 
    // export let component_column; // the component going into a specific column (component, column)

    const tableHeaders = Object.keys(headerData[0]);
    const columns = tableHeaders.length;
    let selectedHeader = "id";
    let asc = true;

    const sortByHeader = (header) => { 
        headerData = headerData.sort((obj1, obj2) => {
            return obj1[header].toString().localeCompare(obj2[header].toString(), undefined , {
                numeric: true,
                sensitivity: 'base'
                });
        });
        if (!asc){ headerData = headerData.reverse(); }
        selectedHeader = header;
    }

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