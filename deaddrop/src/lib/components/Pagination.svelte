<script>
    import SearchBar from "./SearchBar.svelte";
    import { onMount } from 'svelte';
    import ActionButton from '$lib/components/ActionButton.svelte';
    import IntDropdown from "./IntDropdown.svelte";
    import PaginationButtons from "./PaginationButtons.svelte";
    export let data
    export let blacklist = [""]
    export let file
    onMount(() => {
        file = window.URL.createObjectURL(new Blob([JSON.stringify(data)], {type:'application/json;charset=utf-8'}))
    });
    
    let headers =['']

    if(data.length > 0){
        headers = Object.getOwnPropertyNames(data[0])
    }
    headers = headers.filter(item=> !blacklist.includes(item.toString()))
    
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

    <div class="content">
        <div class="item">
            {#if data.length > 0} 
                {#each headers as header}
                    <span style="font-weight: bold">{header}</span>
                {/each}
            {/if} 
        </div>
        
        {#if data.length > 0 }
            {#each data as item}    
                <div class="item">
                    {#each headers as head}
                        <span style="flex: 1"> {item[head]} </span>
                    {/each}
                </div>
            {/each}

            {:else}
            <div class = "item"> 
                <span style ="flex:1"> Table is Empty </span>
            </div>
        {/if}
        
    </div>
    {#if data.length > 0 }
        <div class="bar">
            <div class = "show">
                <span style = "margin-top: 10px"> Showing {data.length} items </span>
            </div>
            <div class = "show"></div>
            <div class = "nav">
                <PaginationButtons/>
            </div>
        </div>
        <a style="height:2em;width:15em;display:flex;align-items:center;" download="logs.json" href="{file}">
            <img style="height:100%" src="./download.svg"/>
            <span>Download</span>
        </a>
    {/if}

</div>

<style>
    .container {
        flex: 1;
        display: flex;
        flex-direction: column;
        max-height: 100%;
    }

    .bar {
        flex:.33;
        display: flex;
        flex-direction: row;
    }

    .content {
        height:300px;
        display: flex;
        flex-direction: column;
        border-top: 2px solid #4d4d4d;
        border-bottom: 2px solid #4d4d4d;
        overflow-y: auto; 
    }

    .segment {
        flex: 1;
    }

    .show {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .show span {
        color: #4d4d4d; 
        margin-right: 10px;
    }

    .search {
        flex: 0.25; 
        display: flex;
        align-items: center;
        padding: 10px;
    }

    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #4d4d4d;
    }

    .item span {
        flex: 1;
    }

    .nav {
        flex: 0.25; 
        display: flex;
        align-items: center;
        margin-top: 10px;
        padding: 10px;
    }
</style>
