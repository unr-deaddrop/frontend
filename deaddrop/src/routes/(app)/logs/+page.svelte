<script>
    // import { comms_data, tasks} from '$lib/components/data';
    export let data;
    let {comms_data, endpt_comms, tasks } = data;
    import LineChart from '$lib/components/LineChart.svelte';
    import Pagination from '$lib/components/Pagination.svelte';
    // server log data is how many communications between c2 server and user
    // agent log data is how many communications between c2 server and user
    // tasks is ID, endpoitn, user, starttime from django

    // for tasks - we want to yoink this data straight from django in the load function
    // for comms_data - we can't do this yet or i don't know how to
    // this comms_data may just be a calculation of all logs filtered by the time. 
    // this will be the implementation in the load function at least. by implementing this in the load function, we are able to easily change as needed
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
                    <LineChart data = {comms_data}/>
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
                    <LineChart data = {comms_data}/>
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
                <Pagination data = {tasks}/>
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