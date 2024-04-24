<svelte:head>
    <link rel="stylesheet" href="//cdn.datatables.net/2.0.3/css/dataTables.dataTables.min.css">
</svelte:head>

<script> 
    import { onMount } from 'svelte';
    import DataTable from 'datatables.net-dt';

    export let data;
    export let blacklist = [""];
    export let file;
    export let url_columns = [];
    export let table_id = "default_table";
    export let showDownload = false;

    let headers = ['']

    if(data.length > 0){
        headers = Object.getOwnPropertyNames(data[0]);
    }
    headers = headers.filter(item => !blacklist.includes(item.toString()));

    onMount(() => {
        // Parse the headers, turn into column dictionary
        // See https://stackoverflow.com/questions/30489307/make-column-data-as-hyperlink-datatable-jquery

        // I don't like copy-pasting this across all the pages that need hyperlink 
        // support, but if it works, it works; the other problem is that we've already
        // been doing this "page splitting" for too long lol
        let column_data = []
        for (const header of headers){
            if (url_columns.includes(header)){
                column_data.push(
                    {
                        "data": header,
                        "render": function(data, type, row, meta){
                            if(type === 'display'){
                                data = '<a style="color: #a60707;" href="' + data + '">' + data + '</a>';
                            }

                            return data;
                        }
                    }
                )
            } else {
                column_data.push({"data": header})
            }
        }

        let table = new DataTable('#'+table_id, {
            "bAutoWidth": false,
            "columns": column_data
        });

        // let page_data = table.rows().data().toArray()
        // file = window.URL.createObjectURL(new Blob([JSON.stringify([page_data])], {type:'application/json;charset=utf-8'}))
        file = window.URL.createObjectURL(new Blob([JSON.stringify([data])], {type:'application/json;charset=utf-8'}))
    });
</script>

<div class="container">
    <table id={table_id} class="content display compact" style="word-break: break-all">
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
    </table>

    {#if showDownload}
        <a class="button" style="height:2em;width:fit-content;display:flex;align-items:center;justify-content:space-between" download="logs.json" href="{file}">
            <img style="height:100%" src="./download.svg" alt = "download"/>
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