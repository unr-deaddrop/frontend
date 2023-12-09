<script>
    import Dropdown from "$lib/components/Dropdown.svelte";
    let target = "t"
    let protocol = "t"
    let args = "t"
    
    async function handleClick(){
        var currentDateTime = new Date().toISOString();
        let body = {
                "target": target,
                "protocol": protocol,
                "args": args
            }
        let task_form = {
            "start_time": currentDateTime,
            "end_time": null,
            "in_progress": false,
            "data": body,
            "user": null,
            "endpoint": null
        }
        const res = await fetch('http://127.0.0.1:8000/backend/tasks/', {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(task_form)
        })
        
        const json = await res.json();
        console.log(JSON.stringify(json));
    }

    export let data;
</script>

<div class = "container">
    <div class = "upper_body"> 
        <div class = "left">

            <h2> Issue Command </h2>
            <div class = "tab_body"> 
                <div class = "tab_head"> 
                    <span> Standard Options </span>
                </div> 
                <div class = "tab_content">
                    <div class = "field_column">
                        <div class = "field"> 
                            <label for="username">Target Agent:</label>
                            <input type="text" id="username" bind:value={target} placeholder="user.name">
                        </div>
                        <div class = "field"> 
                            <label for="username">Protocol:</label>
                            <input type="text" id="username" bind:value={protocol} placeholder="user.name">
                        </div>
                        <div class = "field"> 
                            <label for="username">Arguments:</label>
                            <input type="text" id="username" bind:value={args} placeholder="user.name">
                        </div>
                    </div>
                    <button
                    on:click={handleClick}> 
                        Export Commands 
                    </button>
                </div>    
            </div>
        </div>

        <div class = "right">
            <h2 style = "color: #e6e6e6">.</h2>
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Available Commands </span>
                </div> 
                <div class = "tab_content">
                    <span style = "color: #4d4d4d"> Select a command to issue. 
                    You can view the command reference by selecting the target endpoint and then using the Command Reference below.
                        <div class = "checkbox">
                            <input type = "checkbox" id = "Protocol 1"> 
                            <label for ="Protocol 1"> Protocol 1</label>
                        </div>
                        <div class = "checkbox">
                            <input type = "checkbox" id = "Protocol2"> 
                            <label for ="Protocol 2"> Protocol 2</label>
                        </div>
                        <div class = "checkbox">
                            <input type = "checkbox" id = "Protocol 3"> 
                            <label for ="Protocol 3"> Protocol 3</label>
                        </div>
                        <div class = "checkbox">
                            <input type = "checkbox" id = "Protocol 4"> 
                            <label for ="Protocol 4"> Protocol 4</label>
                        </div>
                        <div class = "checkbox">
                            <input type = "checkbox" id = "Protocol 5"> 
                            <label for ="Protocol 5"> Protocol 5</label>
                        </div>
                        <div class = "checkbox">
                            <input type = "checkbox" id = "Protocol 6"> 
                            <label for ="Protocol 6"> Protocol 6</label>
                        </div>
                    </span>
                    <div class = "protocol_options">
                       
                
                    </div>
                </div>    
            </div>
        </div>
    </div>
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

    

    
</style>