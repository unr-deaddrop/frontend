<script>
    import SearchBar from "./SearchBar.svelte";
    import { onMount } from 'svelte';
    import ActionButton from '$lib/components/ActionButton.svelte';
    import IntDropdown from "./IntDropdown.svelte";
    import PaginationButtons from "./PaginationButtons.svelte";
    import { invalidateAll } from "$app/navigation";
    import { writable } from "svelte/store";
    import { page } from '$app/stores'
    import { goto } from '$app/navigation'
    import { browser } from '$app/environment'
    export let data
    export let blacklist = [""]
    export let file
    export let pages = 1
    export let showDownload = false
    onMount(() => {
        file = window.URL.createObjectURL(new Blob([JSON.stringify(data)], {type:'application/json;charset=utf-8'}))
    });
    
    let headers =['']
    const search = writable($page.url.searchParams.get('search') || '');
    const show = writable($page.url.searchParams.get('show')||'10');
    const currentPage = writable($page.url.searchParams.get('page'));
    search.subscribe((searchString) => {
        $page.url.searchParams.set("search", searchString);
        if (browser) {
            history.replaceState(history.state, '', $page.url);
        }
    })
    show.subscribe((showNum) => {
        $page.url.searchParams.set("show", showNum);
        if (browser) {
            history.replaceState(history.state, '', $page.url);
        }
    })

    if(data.length > 0){
        headers = Object.getOwnPropertyNames(data[0])
    }
    headers = headers.filter(item=> !blacklist.includes(item.toString()))
    
</script>

<div class="container">
    
    <div class="bar"> 
        <div class="show">
            <span>Show </span>
            <IntDropdown bind:selectedOption={$show}/>
        </div>
        <div class="segment"></div>
        <div class="search">
            <input type="button" onclick="window.location.replace(window.location.href)" class="button" value="Search"/>
            <SearchBar bind:searchString={$search}/>
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
    {#if data.length > 0}
        <div class="bar">
            <div class = "show">
                <span style = "margin-top: 10px"> Showing {data.length} items </span>
            </div>
            <div class = "show"></div>
            <div class = "nav">
                <PaginationButtons pages={pages}/>
            </div>
        </div>
        {#if showDownload}
            <a class="button" style="height:2em;width:fit-content;display:flex;align-items:center;justify-content:space-between" download="logs.json" href="{file}">
                <img style="height:100%" src="./download.svg"/>
                <span>Download</span>
            </a>
        {/if}
    {/if}

</div>

<style>
    .button {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #ffffff;
        margin: .5rem;
    }
    a { 
        color:inherit;
        text-decoration:none;
    }
    .button:hover {
        background-color: #ccc;
        cursor:pointer;
    }
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
