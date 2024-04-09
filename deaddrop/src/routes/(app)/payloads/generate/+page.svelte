<script>
    /** @type {import('./$types').PageData} */
    import Dropdown from "$lib/components/Dropdown.svelte";
    import Context from "$lib/components/Context.svelte"
	import ComboBox from "$lib/components/ComboBox.svelte"
    import SchemaForm from "svelte-jsonschema-form";

    export let data;
    let {endpoint_id, cmd_list, cmd_options} = data;

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
                                <ComboBox 
                                    disabled
                                    id="endpoint"
                                    showRealValue=true
                                    bind:value={endpoint_id}
                                    label="Endpoint"
                                    name="endpoint"
                                    placeholder="Agent Type"
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
                                    placeholder="Encryption Key"
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
                                    placeholder="HMAC Key"
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
                
                <button type="submit"> 
                    Export Commands 
                </button>  
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
                    <Dropdown title = "YouTube Configuration" radius_side = {1}/>
                    <Dropdown title = "Randomization Options"/>
                    <Dropdown title = "Encoding Options"  radius_side = {2}/>
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
                        <Dropdown title = "ls" radius_side = {1}/>
                        <Dropdown title = "calculator"/>
                        <Dropdown title = "dump_creds"  radius_side = {2}/>
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
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px;
        
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