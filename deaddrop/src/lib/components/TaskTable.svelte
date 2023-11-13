<script>
    // table of items
    // this is the table that contains rows of items
    // i want this to be able to take in data and convert it into a table
    // https://svelte.dev/repl/f04266dcd39c4024b1e89084aa549844?version=3.31.2
    export let inData;
    import { styles } from '$lib/styles.js'
    let tableData = inData;

    const tableHeaders = Object.keys(tableData[0]);
    const columns = tableHeaders.length;
    let selectedHeader = "id";
    let asc = true;

    function compareElements(obj1, obj2) {
        return obj1.name.localeCompare(obj2.name, undefined, {
            numeric: true,
            sensitivity: 'base'
        });
        // // If both elements are numbers or both are strings, perform normal comparison
        // if ((typeof obj1 === 'number' && typeof obj2 === 'number') || (typeof obj1 === 'string' && typeof obj2 === 'string')) {
        //     return obj1 < obj2 ? -1 : obj1 > obj2 ? 1 : 0;
        // }
        // // If obj1 is a number and obj2 is a string, prioritize obj1 (numbers before strings)
        // if (typeof obj1 === 'number' && typeof obj2 === 'string') {
        //     return -1;
        // }
        // // If obj1 is a string and obj2 is a number, prioritize obj2 (numbers before strings)
        // if (typeof obj1 === 'string' && typeof obj2 === 'number') {
        //     return 1;
        // }
    }

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
    .highlighted {
		color: #a60707;
	}
    .order-icon{
        cursor: pointer;
    }
</style>