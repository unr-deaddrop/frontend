<script>
    import {goto} from '$app/navigation'
    import { comms_data, } from '$lib/components/data';
    import LineChart from '$lib/components/LineChart.svelte';
    import PieChart from '$lib/components/PieChart.svelte';
    import PaginationDetail from '$lib/components/PaginationDetail.svelte';
    export let data
    
    let {tasks, comms_chart, dash_stats, endpnt_chart} = data.pagedata
    const tasks_blacklist = ['task_id', 'periodic_task_name', 'task_name', 'task_args', 'task_kwargs', 'worker', 'content_type', 'content_encoding', 'result', 'traceback', 'meta', 'task_creator']
   

    async function handleLink(link){
        await goto(link)
    }
</script>

<div class="container">
    <div class= "upper_body">

        <div class = "left"> 
            <h2> Dashboard</h2>

            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Statistics </span>
                </div> 
                <div class = "tab_content">
                    <div class = "stat_container">
                        <div class = "stat_column">
                            <div class = "stat_field">
                                <span class = "field_label"> Installed Agents: </span> <span>{dash_stats.installed_agents}</span>
                            </div>
                            <div class = "stat_field">
                                <span class = "field_label"> Messages sent: </span> <span>{dash_stats.messages_sent}</span>
                            </div>
                            <div class = "stat_field">
                                <span class = "field_label"> Messages fetched:  </span> <span>{dash_stats.messages_fetched}</span>
                            </div>
                            <div class = "stat_field">
                                <span class = "field_label"> Outgoing Volume: </span> <span>{dash_stats.outgoing_volume}</span>
                            </div>
                            <div class = "stat_field">
                                <span class = "field_label"> Incoming Volume: </span> <span>{dash_stats.incoming_volume}</span>
                            </div>
                        </div>
                        <div class = "stat_column">
                            <div class = "stat_field">
                                <span class = "field_label"> Registered Endpoints: </span> <span>{dash_stats.registered_endpoints}</span>
                            </div>
                            <div class = "stat_field">
                                <span class = "field_label"> Total Tasks: </span> <span>{dash_stats.total_tasks}</span>
                            </div>
                            <div class = "stat_field">
                                <span class = "field_label"> Ongoing Tasks: </span> <span>{dash_stats.ongoing_tasks}</span>
                            </div>
                            <div class = "stat_field">
                                <span class = "field_label"> Successful Tasks:  </span> <span>{dash_stats.successful_tasks}</span>
                            </div>
                            <div class = "stat_field">
                                <span class = "field_label"> Failed Tasks </span> <span>{dash_stats.failed_tasks}</span>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Communications (Last 24 Hours) </span>
                </div> 
                <div class = "tab_content">
                    <LineChart data = {comms_chart}/>
                </div>    
            </div>
        </div>
        
        <div class = "right"> 
            <h2 style = "color: #e6e6e6">.</h2>

            <div class = "tab_body" style = "flex: .6"> 
                <div class = "tab_head">
                    <span> Quick Links </span>
                </div> 
                <div class = "tab_content">
                    <div class = "quick_links">
                        <button
                        on:click={() => handleLink("http://backend:8000/admin")}>
                            Go to Django administrative site 
                        </button>
                        <button
                        on:click={() => handleLink("/commands")}>
                            Issue command 
                        </button>
                        <button>Generate new payload </button>
                        <button>View recent tasks</button>
                    </div>
                    
                </div>    
            </div>

            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Endpoint Communication Share </span>
                </div> 
                <div class = "tab_content">
                    <PieChart data = {endpnt_chart}/>
                </div>    
            </div>
        </div>

    </div>

    <div class = "lower_body"> 
       
        <div class = "tab_body"> 
            <div class = "tab_head">
                <span> Running Tasks </span>
            </div> 
            <div class = "tab_content">
                <PaginationDetail data = {tasks} blacklist ={tasks_blacklist} detail = "tasks"/>

            </div>    
        
        </div>    
    </div>
</div>

<style>

.container {
		display: flex;
		flex-direction: column;
		height: 175vh; 
	}

    .upper_body {
        flex: .7;
        display:flex;
        flex-direction: row;
    }

    .left{
        flex: .65;
        display:flex;
        flex-direction: column;
    }

    .left h2 {
        margin: 20px;
    }

    .right{
        flex:.35;
        display:flex;
        flex-direction: column;
    }

    .lower_body {
        flex: .3;
        display: flex;    
    }

    .quick_links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: normal;
    }

    .quick_links button {
    color: white;
    background-color: #a60707;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 7px;
    opacity: 1;
    transition: background-color 0.3s ease; 
    }

    .quick_links button:hover {
    background-color: #8e0606; 
    }

    .quick_links button:active {
    background-color: #6e0404; 
    }

    .stat_container{
        flex: 1;
        display: flex;
        flex-direction: row;
        height: 100%;
    }

    .stat_column{
        flex: 1;
        display: flex;
        flex-direction: column;
        
    }

    .stat_field {
        flex: 1;
        display: flex;
        flex-direction: row;
    }

    .field_label {
        font-weight: bold;
    }

    .stat_field span {
        margin-left: 5px;
    }

</style>
