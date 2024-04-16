<script>
    import ActionButton from '$lib/components/ActionButton.svelte';
    import Pagination from '$lib/components/Pagination.svelte';
    export let data
    let {rel_endpnts, agent_metadata, agent_commands} = data.pagedata
    let agent_blacklist = ['agent', 'detail', 'id', 'connections', 'protocol_state', 'agent_cfg', ]
    let command_blacklist = ['version', 'has_renderer', 'argument_schema', 'result_schema']
</script>

    <div class ="container">
        <!--
        <div class = "segment" style = "flex:.5"> 
            <div class = "segment"> 
                <h2> {agents.name} agent detail</h2>
            </div>
            <div class = "segment" style="justify-content: end; padding: 20%"> 
                <ActionButton text = "Delete Agent" button_color = "gray"/>
                <ActionButton text = "View in Django Admin" button_color = "blue"/>
            </div>
        </div>
        -->
        <h2> {agent_metadata.name}</h2>
        <div class ="segment" style = "flex:.5">
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Overview </span>
                </div> 
                <div class = "tab_content">
                        <div class = "segment"> 
                            <div class = "stat_column"> 
                                <div class = "segment">
                                    <b> Developed By </b> <span> {agent_metadata.author} </span>
                                </div>
                                <div class = "segment">
                                    <b>Source Code:</b> <span>{agent_metadata.source} </span>
                                </div>
                                <div class = "segment">
                                    <b>Version:</b> <span> {agent_metadata.version} </span>
                                </div>
                            </div>
                            <div class = "stat_column">
                                <div class = "segment">
                                    <b>Supported OSs:</b> <span> {agent_metadata.operating_systems}</span>
                                </div>
                                <div class = "segment">
                                    <b>Supported Protocols:</b> <span> {agent_metadata.protocols} </span>
                                </div>
                                <div class = "segment">
                                    <ActionButton text = "Create a new payload from agent" button_color = "#a60707" hide_img = {true} fn = {console.log('hello')}/>
                                </div>
                            </div>
                        </div>
                </div>    
            </div>    
        </div>

        <div class ="segment">
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Available Commands </span>
                </div> 
                <div class = "tab_content">
                    <Pagination table_id="commands_table" data = {agent_commands} blacklist = {command_blacklist}/>
                </div>    
            </div> 
        </div>

        <div class ="segment">
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Endpoints Using This Agent </span>
                </div> 
                <div class = "tab_content">
                    <Pagination table_id="endpoints_table" data = {rel_endpnts} blacklist = {agent_blacklist}/>
                </div>    
            </div> 
        </div>
    </div>

<style>
    .container {
		display: flex;
		flex-direction: column;
		height: 125vh; 
	}

    .segment {
        display: flex;
        flex-direction: row;
        flex: 1;
    }

    
    .stat_column{
        flex: 1;
        display: flex; 
        flex-direction: column;
        justify-content: space-evenly;
    }

    .stat_column span{
        margin-left: 5px;
    }

    h2 {
        margin-left: 5px;
    }

</style>