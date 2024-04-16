<svelte:head>
    <link rel="stylesheet" href="//cdn.datatables.net/2.0.3/css/dataTables.dataTables.min.css">
</svelte:head>

<script>
    import SearchBar from "./SearchBar.svelte";
    import IntDropdown from "./IntDropdown.svelte";
    import PaginationButtons from "./PaginationButtons.svelte"; 
    import NavButton from "./NavButton.svelte";
    import { onMount } from 'svelte';

    import DataTable from 'datatables.net-dt';

    export let data = [];
    export let blacklist = [""];
    export let detail = ""; 
    export let table_id = "default_table";
    let headers = [''];

    onMount(() => {
        let table = new DataTable('#'+table_id, {
            "bAutoWidth": false,
        });
    });

    if(data.length > 0){
        headers = Object.getOwnPropertyNames(data[0]);
    }
    headers = headers.filter(item => !blacklist.includes(item.toString()));
</script>

<div class="container">
    <table id={table_id} class="content display compact">
        <thead>
            <tr class="item">
                {#each headers as header}
                <th>{header}</th>
                {/each}
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each data as item}
            <tr class="item">
                {#each headers as head}
                <td>{item[head]}</td>
                {/each}
                <td>
                    <NavButton button_color='#a60707' text='View Detail' hide_img={true} path={'/' + detail + '/' + item.id}/>
                </td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>
