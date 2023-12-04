<script>
    let target = ""
    let protocol = ""
    let args = ""

    function handleClick(){

    }
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
                    <div class = "std_options">
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
                    </span>
                    <div class = "protocol_options">
                        <input type = "checkbox" id ="Protocol1"> 
                        <input type = "checkbox" id ="Protocol2"> 
                        <input type = "checkbox" id ="Protocol3"> 
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
            </div>    
        </div>
        <div class = "tab_body"> 
            <div class = "tab_head">
                <span> Command Reference </span>
            </div> 
            <div class = "tab_content">
                this as a thing
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

    .std_options {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
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