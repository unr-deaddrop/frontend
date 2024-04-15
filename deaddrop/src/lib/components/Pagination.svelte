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
    
    let headers = ['']
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
        headers = Object.getOwnPropertyNames(data[0]);
    }
    headers = headers.filter(item => !blacklist.includes(item.toString()));
</script>

<div class="container">
    <div class="bar"> 
        <div class="segment"></div>
        <div class="search">
            <div class="show-top">
                <span style="margin-right: 5px">Show</span>
                <IntDropdown bind:selectedOption={$show}/>
            </div>
            <SearchBar bind:searchString={$search}/>
            <input type="button" onclick="window.location.replace(window.location.href)" class="button" value="Update"/>
            
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

    .search {
        display: flex;
        flex-direction: row;
    }

    .show-top{
        display: flex;
        align-items:center;
        margin-right: 5px;
    }

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
        overflow-wrap: anywhere;
    }

    th, td {
        flex: 1;
        padding: 10px;
        text-align: left;
    }

    th:last-child, td:last-child {
        flex: 0.5;
    }

    .nav, .search, .show{
        flex: 1;
        padding: 10px;
    }
</style>