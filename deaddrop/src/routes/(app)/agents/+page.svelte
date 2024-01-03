<script>
    import { tasks } from '$lib/components/data'; // tasks is meant to be replaced by agent_list
    import PieChart from '$lib/components/PieChart.svelte';
    import ActionButton from '$lib/components/ActionButton.svelte';
    import Pagination from '$lib/components/Pagination.svelte';
    export let data;
    let {agent_types, agent_list, supported_oss, supported_protocols, endpoints_list} = data;
    console.log(agent_list) // you can yoink the name from here
    console.log((endpoints_list)) // you can yoink the endpoint counts from here
    
    function get_count(id, lst=endpoints_list) {
        const matchingItems = lst.filter(item => item.agent === id);
        return matchingItems.length;
    }
</script>
endpoint count
{get_count(1)}

all data
{#each Object.values(data) as cell}
        <div class="grid-item">{cell}</div>
{/each}
agent data
{#each Object.values(agent_list) as cell}
        <div class="grid-item">{cell}</div>
{/each}

    <div class = "container">

        <div class = "section" style = "flex-direction: row">
            <div class = "section" style = "flex:.5">
                <h2> Agents </h2>
                <div class = "tab_body"> 
                    <div class = "tab_head">
                        <span> Agent type breakdown</span>
                    </div> 
                    <div class = "tab_content">
                        <div class = "chart_container">
                            <PieChart data = {agent_types}/>
                        </div>
                    </div>    
                </div>
            </div>

            <div class = "section">
                <h2 style = "color: #e6e6e6">.</h2>
                <div class = "tab_body"> 
                    <div class = "tab_head">
                        <span> Actions </span>
                    </div> 
                    <div class = "tab_content">
                        <div class = "action_column"> 
                            <div class = "action_bar"> 
                                <ActionButton button_color = "#4364C1" text = "Register agent" src = './clipboard.svg'/>
                                <span>Register a new type of agent for payload construction</span>
                            </div>
                            <div class = "action_bar"> 
                                <ActionButton button_color = '#E74A3B' text = "Delete agent" src = './trash.svg'/>
                                <span>Uninstall an agent type and its definitions </span>
                            </div>
                            <div class = "action_bar"> 
                                <ActionButton button_color = '#858796' text = "Show agents" src = "./folder.svg"/>
                                <span>Show the agent definition storage directory</span>
                            </div>
                        </div>
                    </div>    
                </div>
                <div style = "flex:1">
                    <h2 style = "color: #e6e6e6">.</h2> 
                </div>
         
            </div>

        </div>

        <div class = "section">
            
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Installed agents </span>
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

    .chart_container{
        width: 100%;
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .action_column{
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .action_bar {
        flex: 1;
        display:flex;
        flex-direction: row;
        max-width: 85%;
        max-height: 10%;
        margin-bottom: 25px;
        align-items: center;
    }

    .action_bar span {
        flex: 2.5;
        color: #4d4d4d;
        margin-left: 10px;
    }

</style>