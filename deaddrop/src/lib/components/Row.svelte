<script>
    // individual rows containing items
    // this is each row
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
        {#each Object.values(row) as cell}
            <div class="grid-item">{cell}</div>
        {/each}
    {/each}
</div>