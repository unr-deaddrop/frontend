<svelte:head>
    <!-- <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.css"> -->
    <link rel="stylesheet" href="//cdn.datatables.net/2.0.3/css/dataTables.dataTables.min.css">

    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//cdn.datatables.net/2.0.3/js/dataTables.min.js"></script>
    <!-- <script src="//cdn.datatables.net/1.10.16/js/dataTables.bootstrap4.min.js"></script> -->
</svelte:head>

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
    import DataTable from 'datatables.net-dt';
    export let data
    export let blacklist = [""]
    export let file
    export let showDownload = false
    onMount(() => {
        
        let table = new DataTable('#myTable', {
            "bAutoWidth": false,
        });

        // let page_data = table.rows().data().toArray()
        // file = window.URL.createObjectURL(new Blob([JSON.stringify([page_data])], {type:'application/json;charset=utf-8'}))
        file = window.URL.createObjectURL(new Blob([JSON.stringify([data])], {type:'application/json;charset=utf-8'}))
    });
    
    let headers = ['']

    if(data.length > 0){
        headers = Object.getOwnPropertyNames(data[0]);
    }
    headers = headers.filter(item => !blacklist.includes(item.toString()));
</script>

<div class="container">
    <table id="myTable" class="content display compact">
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

    {#if showDownload}
        <a class="button" style="height:2em;width:fit-content;display:flex;align-items:center;justify-content:space-between" download="logs.json" href="{file}">
            <img style="height:100%" src="./download.svg"/>
            <span>Download</span>
        </a>
        <span>Download all data in the table (including entries not currently visible) as a JSON.</span>
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
        display: flex;
        flex-direction: column;
        height: 100%;
    }

</style>