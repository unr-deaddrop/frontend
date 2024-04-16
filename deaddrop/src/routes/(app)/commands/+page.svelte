<script>
    /** @type {import('./$types').PageData} */
    import Dropdown from "$lib/components/Dropdown.svelte";
    import Context from "$lib/components/Context.svelte"
	import ComboBox from "$lib/components/ComboBox.svelte"
	import Button from "$lib/components/Button.svelte"
    import SchemaForm from "svelte-jsonschema-form";

    export let data;
    let {endpoint_list} = data;

    let endpoint_options = [
    	{ text: "Istanbul", value: "istanbul" },
        { text: "Seoul", value: "seoul", disabled: true },
  	]
    endpoint_list.forEach(endpoint => {
        console.log(endpoint)
        let option = {text: endpoint['id'], value: endpoint['id']}
        endpoint_options.push(option)
    })
    let target_endpoint = "00000000-0000-0000-0000-000000000000"
    $: console.log(target_endpoint)

    let protocol_options = []
    let protocol = ""

    let cmd_list = []
    async function get_cmd_list(endpoint_id) {
        cmd_list = await fetch(`http://backend.localhost/backend/endpoints/${endpoint_id}/get_command_metadata/`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
            }
        })
        cmd_list = await cmd_list.json()
        console.log("43 cmd_list")
        console.log(cmd_list)
        let cmd_options = []
        let i = 0
        cmd_list.forEach(cmd => {
            console.log(cmd)
            let option = {text: cmd['name'], value: i}
            cmd_options = [...cmd_options, option]
            i++;
        })
        console.log('cmd_options')
        console.log(cmd_options)
        return cmd_options
    }
    let cmd_options = [
    	{ text: "Istanbul", value: "istanbul" },
        { text: "Seoul", value: "seoul", disabled: true }
    ]
    let cmds_available = get_cmd_list(target_endpoint)
    $: cmd_options = [...cmd_options, cmds_available]
    console.log('52')
    $: console.log('52', cmd_options)
    let cmd = ""
    console.log('54')
    $: console.log('54', cmd)

    // let schema = fetchSchema();

    // async function fetchSchema() {
    //     let id = '00000000-0000-0000-0000-000000000000'; // this will change dynamically
    //     const res = await fetch(`http://backend:8000/backend/endpoints/${id}/get_command_metadata/`, {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });
    //     if (res.ok) {
    //         return await res.json();
    //     } else {
    //         throw new Error(await res.text());
    //     }
    // }

    // const schema = cmd_list[parseInt(cmd)]['argument_schema']
    
    const initialData = {
        "message": "asdfasdf",
        "ping_timestamp": "2024-03-14"};

    
    async function sendCommand(){
        var currentDateTime = new Date().toISOString();
        let body = {
                "target_endpoint": target_endpoint,
                "protocol": protocol,
                "cmd": cmd
            }
        let task_form = {
            "start_time": currentDateTime,
            "end_time": null,
            "in_progress": false,
            "data": body,
            "user": null,
            "endpoint": null
        }
        const res = await fetch('http://backend:8000/backend/tasks/', {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task_form)
        });
        
        const json = await res.json();
        console.log(JSON.stringify(json));
    }
</script>

<div class = "container">
    <form class = "upper_body"> 
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
                                    id="endpoint" 
                                    bind:value={target_endpoint}
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
                    <!-- {#await schema}
                        <p>Loading schema...</p>
                    {:then schema}
                        <SchemaForm schema={schema} data={initialData}/>
                    {:catch error}
                        <div class="error">ERROR: {error.message}</div>
                    {/await} -->
                </div>
                
                <Button>Export Commands</Button> 
            </div>
        </div>
    </form>
    <div class = "lower_body">
        <div class = "tab_body"> 
            <div class = "tab_head">
                <span> Protocol Options </span>
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
                <span> Command Reference </span>
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