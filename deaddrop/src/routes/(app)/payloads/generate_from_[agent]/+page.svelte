<script>
    /** @type {import('./$types').PageData} */
    import Context from "$lib/components/Context.svelte"
	import InputBox from "$lib/components/InputBox.svelte"
	import Checkbox from "$lib/components/Checkbox.svelte"
	import Button from "$lib/components/Button.svelte"
    import SchemaForm from "svelte-jsonschema-form";

    export let data;
    let {agent_id, agent_metadata, agent_schema, protocol_schemas} = data;

    let agentSchema = agent_schema
    let protocolSchema = protocol_schemas
    $: console.log('agent_schema', agentSchema)
    $: console.log('protocol_schema', protocolSchema)
    
    let initialData = {
        "protocol_config": {}
    };
    $: console.log('initialData', initialData)
    $: jsonData = JSON.stringify(initialData)
</script>

<div class = "container">
    <form class="upper_body" method="POST"> 
        <div class = "left">

            <h2> Generate Payload </h2>
            <div class = "tab_body"> 
                <div class = "tab_head"> 
                    <span> Standard Options </span>
                </div> 
                <div class = "tab_content">
                    <div class = "field_column">
                        <div class = "field"> 
                            <Context>   
                                <div class="stack">
                                <InputBox 
                                    id="name"
                                    bind:value={initialData["name"]}
                                    name="name"
                                    placeholder="Name"
                                />
                                </div>
                            </Context>
                        </div>
                        <div class = "field"> 
                            <Context>   
                                <div class="stack">
                                <InputBox 
                                    id="hostname" 
                                    bind:value={initialData["hostname"]}
                                    name="hostname"
                                    placeholder="Hostname"
                                    />
                                </div>
                            </Context>
                        </div>
                        <div class = "field"> 
                            <Context>   
                                <div class="stack">
                                <InputBox 
                                    id="address" 
                                    bind:value={initialData["address"]}
                                    name="address"
                                    placeholder="Address"
                                    />
                                </div>
                            </Context>
                        </div>
                        <div class = "field"> 
                            <Context>   
                                <div class="stack">
                                    <Checkbox id="isVirtual" label_name="Is Virtual?" bind:checked={initialData["isVirtual"]}/>
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
                <input type="hidden" name="agent_config" value={JSON.stringify(initialData["agent_config"])} />
                <input type="hidden" name="protocol_config" value={JSON.stringify(initialData["protocol_config"])} />
                
                <Button>Export Commands</Button>
            </div>
        </div>
    </form>
    <div class = "lower_body">
        <div class = "tab_body"> 
            <div class = "tab_head">
                <span> Agent Options </span>
            </div> 
            <div class = "tab_content">
                <div class = "drop_container">
                    <div class = "tab_content">
                        {#await agentSchema}
                            <p>Loading schema form agent_config...</p>
                        {:then agentSchema}
                            <SchemaForm schema={agentSchema} bind:data={(initialData["agent_config"])}/>
                        {:catch error}
                            <div class="error">ERROR: {error.message}</div>
                        {/await}
                    </div>
                </div>
            </div>    
        </div>
        <div class = "tab_body"> 
            <div class = "tab_head">
                <span> Protocol Options </span>
            </div> 
            <div class = "tab_content">
                <div class = "tab_content">
                    <div class = "drop_container">
                        <!-- each protocol schema -->
                        <div class = "tab_content">
                            {#await protocolSchema}
                                <p>Loading schema form protocol_config_all...</p>
                            {:then protocolSchema}
                                {#each protocolSchema as {name, config}}
                                    <div class="protocol_options">
                                        <SchemaForm schema={config} bind:data={(initialData["protocol_config"][name])}/>
                                    </div>
                                {/each}
                            {:catch error}
                                <div class="error">ERROR: {error.message}</div>
                            {/await}
                        </div>

                    </div>
                </div>    
            </div>    
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
		flex-direction: column;
        height: 133vh;

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

    .protocol_options{
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 10px;
        
    }

    .field {
        width: 100%;
        margin-left: 0px;
        margin-right: 0px;
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

    .right {
        flex:.5;
        display:flex;
        flex-direction: column;
    }
    
    .lower_body {
        flex: .6;
        display: flex;    
        flex-direction: column;
    }

	.stack {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
    

    
</style>