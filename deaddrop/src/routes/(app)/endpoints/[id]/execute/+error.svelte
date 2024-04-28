<script>
    /** @type {import('./$types').PageData} */
    import Dropdown from "$lib/components/Dropdown.svelte";
    import Context from "$lib/components/Context.svelte"
	import ComboBox from "$lib/components/ComboBox.svelte"
	import Button from "$lib/components/Button.svelte"
    import SchemaForm from "svelte-jsonschema-form";

    import Pagination from '$lib/components/Pagination.svelte';
    let command_blacklist = ['version', 'has_renderer', 'argument_schema', 'result_schema']

    export let data;
    let {endpoint_id, cmd_list, cmd_options, agent_commands} = data;

    let endpoint_options = [
        { text: endpoint_id, value: endpoint_id, disabled: true },
  	]

    let protocol_options = []
    let protocol = ""

    // $: console.log('52', cmd_options)
    let cmd = "0"
    $: cmd_int = parseInt(cmd)
    // $: console.log('54', cmd, typeof(cmd), typeof(parseInt(cmd)))
    // $: console.log('list', cmd_list)
    // $: console.log('schema', cmd_list[cmd_int])
    // $: console.log('argument_schema', cmd_list[cmd_int]['argument_schema'])
    
    $: schema = cmd_list[cmd_int]['argument_schema']
    // $: console.log('argument_schema2', schema)
    
    let initialData = {};
    $: console.log('initialData', initialData)
    $: jsonData = JSON.stringify(initialData)
</script>

<div class = "container">
    <form class="upper_body" method="POST"> 
        <div class = "left">

            <h2> Issue Command </h2>
            <div class = "tab_body"> 
                <div class = "tab_head"> 
                    <span> Standard Options </span>
                </div> 
                <div class = "tab_content">
                    <div class = "field_column">
                        <div class = "field"> 
                            <Context>   
                                <div class="stack">
                                <ComboBox 
                                    disabled
                                    id="endpoint"
                                    showRealValue=true
                                    bind:value={endpoint_id}
                                    label="Endpoint"
                                    name="endpoint"
                                    placeholder="Endpoint"
                                    options={endpoint_options}
                                />
                                </div>
                            </Context>
                        </div>
                        <div class = "field"> 
                            <Context>   
                                <div class="stack">
                                <ComboBox 
                                    id="protocol" 
                                    bind:value={protocol}
                                    label="Protocol"
                                    name="protocol"
                                    placeholder="Protocol"
                                    options={protocol_options}
                                    />
                                </div>
                            </Context>
                        </div>
                        <div class = "field"> 
                            <Context>   
                                <div class="stack">
                                <ComboBox 
                                    id="command" 
                                    bind:value={cmd}
                                    label="Command"
                                    name="command"
                                    placeholder="Command"
                                    options={cmd_options}
                                    />
                                </div>
                            </Context>
                        </div>
                    </div>
                </div>    
            </div>
        </div>

        <div class = "right">
            <h2 style = "color: #e6e6e6">.</h2>
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Command </span>
                </div> 

                <div class = "tab_content">
                    {#await schema}
                        <p>Loading schema...</p>
                    {:then schema}
                        <SchemaForm schema={schema} bind:data={(initialData)}/>
                    {:catch error}
                        <div class="error">ERROR: {error.message}</div>
                    {/await}
                </div>
                <input type="hidden" name="args" value={jsonData} />
                <div style="padding:10px;">
                    <Button>Execute Command</Button>
                </div>
            </div>
        </div>
    </form>
    
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
</div>

<style>
    .container {
        display: flex;
		flex-direction: column;
        /* height: 133vh; */
    }

    .upper_body {
        flex: .4;
        display:flex;
        flex-direction: row;
    }

    .left{
        flex: .6;
        display:flex;
        flex-direction: column;
    }

    .left h2 {
        margin: 20px;
    }

    .segment {
        display: flex;
        flex-direction: row;
        flex: 1;
    }

    .field {
        width: 100%;
        margin-left: 0px;
        margin-right: 0px;
    }

    .right {
        flex:.5;
        display:flex;
        flex-direction: column;
    }
    
	.stack {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
    

    
</style>
