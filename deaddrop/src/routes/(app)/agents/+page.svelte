<script>
    import { tasks, endpt_comms } from '$lib/components/data';
    import PieChart from '$lib/components/PieChart.svelte';
    import ActionButton from '$lib/components/ActionButton.svelte';
    import Pagination from '$lib/components/Pagination.svelte';
</script>

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
                            <PieChart data = {endpt_comms}/>
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