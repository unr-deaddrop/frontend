<script>
    import Pagination from '$lib/components/Pagination.svelte';
    import LineChart from '$lib/components/LineChart.svelte';
    export let data
    let {logs, agent_data, server_data} = data.pagedata
    let log_blacklist = ['data']
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
                    <LineChart data = {server_data}/>-
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
    <div class= "lower_body">
        <div class = "tab_body"> 
            <div class = "tab_head">
                <span> Logs</span>
            </div> 
            <div class = "tab_content">
                <Pagination data = {logs} blacklist = {log_blacklist}/>
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
</style>