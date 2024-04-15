<script>
    import SearchBar from "./SearchBar.svelte";
    import IntDropdown from "./IntDropdown.svelte";
    import PaginationButtons from "./PaginationButtons.svelte"; 

    export let data = [];
    export let blacklist = [""];
    let headers = [''];

    if(data.length > 0){
        headers = Object.getOwnPropertyNames(data[0]);
    }
    headers = headers.filter(item => !blacklist.includes(item.toString()));
</script>

<div class="container">
    
    <div class="bar"> 
        <div class="show">
            <span>Show </span>
            <IntDropdown/>
        </div>
        <div class="segment"></div>
        <div class="search">
            <SearchBar/>
        </div>
    </div>

    <table class="content">
        {#if data.length > 0}
        <thead>
            <tr class="item">
                {#each headers as header}
                <th>{header}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each data as item}
            <tr class="item">
                {#each headers as head}
                <td>{item[head]}</td>
                {/each}
            </tr>
            {/each}
        </tbody>
       
        {:else}
            <tr class="item">
                <td colspan={headers.length + 1}>Table is Empty</td>
            </tr>
        {/if}
      
    </table>

    <div class="bar">
        <div class="show">
            <span style="margin-top: 10px">Showing items 1-3 of 3</span>
        </div>
        <div class="show"></div>
        <div class="nav">
            <PaginationButtons/>
        </div>
    </div>

</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .bar{
        display: flex;
        align-items: center;
    }

    .item {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #4d4d4d;
    }

    .content {
        display: flex;
        flex-direction: column;
        overflow-y: auto; 
        border-top: 2px solid #4d4d4d;
        border-bottom: 2px solid #4d4d4d;
    }

    th, td {
        flex: 1;
        padding: 10px;
        text-align: center;
        
    }

    th:last-child, td:last-child {
        flex: 0.5;
    }

    .nav, .search, .show {
        flex: 1;
        padding: 10px;
    }
</style>