<script>
    import Pagination from '$lib/components/Pagination.svelte';
    export let data
    let {logs} = data.pagedata
    
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
                    <!--<LineChart data = {}/>-->
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
                    <!--<LineChart data = {}/>-->
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
                <Pagination data = {logs}/>
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