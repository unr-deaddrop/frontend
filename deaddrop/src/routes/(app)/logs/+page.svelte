<script>
    import Pagination from '$lib/components/Pagination.svelte';
    import LineChart from '$lib/components/LineChart.svelte';

    import { page } from '$app/stores'

    /** @type {import('./$types').PageData} */
    export let data
    let {logs, agent_data, server_data} = data.pagedata
    let log_blacklist = ['data']

    let params = $page.url.searchParams

    let log_id = params.get("id") || ""
    let log_category = params.get("category") || ""
    let log_level = params.get("level") || ""
    let log_source = params.get("source") || ""
    let log_user = params.get("user") || ""
    let log_task = params.get("task") || ""
    let log_ts_start = params.get("timestamp__gte") || ""
    let log_ts_end = params.get("timestamp__lte") || ""
    let log_return_count = params.get("limit") || 100
    let log_search = params.get("search") || ""

    function handleClick(){
        // Redirect the user to a version of this page with filled-in query
        // states applied.
        let start_time = "";
        let end_time = "";
        if(log_ts_start){
            start_time = new Date(log_ts_start).toISOString();
        }
        if(log_ts_end){
            end_time = new Date(log_ts_end).toISOString();
        }

        let url = new URL(window.location.href);
        url.search = new URLSearchParams(
            {
                id: log_id, 
                category: log_category,
                level: log_level,
                source: log_source,
                user: log_user,
                task: log_task,
                search: log_search,
                timestamp__gte: start_time,
                timestamp__lte: end_time,
                limit: String(log_return_count),
            }
        );
        window.location.replace(url)
    }
</script>

<div class = "container">
    <div class ="upper_body">  
        <div class = "section">
            <h2> Logs </h2>
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Server-generated logs </span>
                </div> 
                <div class = "tab_content">
                    <LineChart data = {server_data}/>
                </div>    
            </div>
        </div>
        <div class = "section">
            <h2 style = "color: #e6e6e6">.</h2>
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Agent-generated logs </span>
                </div> 
                <div class = "tab_content">
                    <LineChart data = {agent_data}/>
                </div>    
            </div>
        </div>
        
    </div>
    <div class = "tab_body"> 
        <div class = "tab_head" style = "flex:.08">
            <span> Filters </span>
        </div> 
        <!-- i don't know how to fix this. i don't want to know -->
        <div class = "tab_content" style="margin-bottom: 40px;">
            <span>By default, this page only loads the first 100 logs returned by the server. You can change this (and other options) here.</span>
            <div class = "section" style = "height: 100%;">
                <div class ="section" style = "flex-direction:row; margin-top: 10px">
                    <div class ="section">
                        <div class = "field"> 
                            <label for="log_id">ID</label>
                            <input type="text" id="log_id" bind:value={log_id}>
                        </div>
                        <div class = "field"> 
                            <label for="log_category">Category</label>
                            <input type="text" id="log_category" bind:value={log_category}>
                        </div>
                        <div class = "field"> 
                            <label for="log_level">Level</label>
                            <input type="number" id="log_level" bind:value={log_level}>
                        </div>
                    </div>
                    <div class ="section">
                        <div class = "field"> 
                            <label for="log_source">Source</label>
                            <input type="number" id="log_source" bind:value={log_source}>
                        </div>
                        <div class = "field"> 
                            <label for="log_user">User</label>
                            <input type="number" id="log_user" bind:value={log_user}>
                        </div>
                        <div class = "field"> 
                            <label for="log_task">Task</label>
                            <input type="number" id="log_task" bind:value={log_task}>
                        </div>
                    </div>
                    <div class ="section">
                        <div class = "field"> 
                            <label for="log_ts_start">Start timestamp</label>
                            <input type="datetime-local" id="log_ts_start" bind:value={log_ts_start}>
                        </div>
                        <div class = "field"> 
                            <label for="log_ts_end">End timestamp</label>
                            <input type="datetime-local" id="log_ts_end" bind:value={log_ts_end}>
                        </div>
                        <div class = "field"> 
                            <label for="log_return_count">Return count</label>
                            <input type="number" id="log_return_count" bind:value={log_return_count}>
                        </div>
                    </div>
                </div>
                <div class ="section" style = "flex-direction:row; margin-top: 10px">
                    <div class ="section">
                        <div class = "field"> 
                            <label for="log_search">Search data</label>
                            <input type="text" id="log_search" bind:value={log_search} placeholder="Search within log data here...">
                        </div>
                    </div>
                </div>
                <button on:click={handleClick} style="margin-top:20px;">Filter logs</button>
            </div>
        </div>    
    </div>
    <div class= "lower_body">
        <div class = "tab_body"> 
            <div class = "tab_head">
                <span>Logs</span>
            </div> 
            <div class = "tab_content">
                <Pagination table_id = "logs_table" data = {logs} showDownload={true} blacklist = {log_blacklist}/>
            </div>    
        </div>
    </div>
</div>

<style>
    .container {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 125vh;

    }

    .upper_body {
        flex: 1;
        display: flex;
        flex-direction: row;
    }

    .lower_body {
        flex: 1;
        display: flex;   
    }

    .section_outline {
    flex: 1;
    display: flex;
    flex-direction: column;
    }

    .section h2 {
        margin-left: 20px
    }

    .field label {
        color: #4d4d4d
    }

    .field input {
        padding: 10px;
        outline: none;
        border-radius: 5px;
        border: 1px solid darkgray;
    }

    button {
      flex: 1;
      display: flex;
      align-items: center;
      border-radius: 5px;
      padding: 5px 20px;
      font-size: 14px;
      text-decoration: none;
      color: white;
      overflow: hidden;
      transition: background-color 0.3s ease-in-out;
      background-color: #a60707;
      width:25%;
      min-width:250px;
    }

    button:hover {
        background-color: #730000;
    }
</style>
