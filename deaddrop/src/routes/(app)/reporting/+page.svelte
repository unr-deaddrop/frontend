<script>
    let source = ""
    let uid = ""
    let tid = ""
    let log_lvl = ""
    let start_time = ""
    let category = ""
    let end_time = ""
    
    function handleClick(){}
</script>

    <div class = "container">
        
        <div class = "section">
            <h2> Reporting and Export logs</h2>
            <div class = "tab_body"> 
                <div class = "tab_head" style = "flex:.08">
                    <span> Filters </span>
                </div> 
                <div class = "tab_content">
                    <div class = "section" style = "height: 100%;">
                        <div class ="section_outline" >
                            <div class = "field"> 
                                <label for="source"> Source ("server," ID or name"):</label>
                                <input type="text" id="source" bind:value={source} placeholder="user.name">
                            </div>
                            <div class = "field"> 
                                <label for="uid">User (ID or username)</label>
                                <input type="text" id="uid" bind:value={uid} placeholder="user.name">
                            </div>
                            <div class = "field" style = "margin-bottom: 0px;"> 
                                <label for="task_id">Task (ID):</label>
                                <input type="text" id="task_id" bind:value={tid} placeholder="user.name">
                        </div>
                           
                        </div>
                        <div class ="section" style = "flex-direction:row; margin-top: 10px">
                            <div class ="section">
                                <div class = "field"> 
                                    <label for="log_lvl">Log level:</label>
                                    <input type="text" id="log_lvl" bind:value={log_lvl} placeholder="user.name">
                                </div>
                                <div class = "field"> 
                                    <label for="start_time">Start Time:</label>
                                    <input type="text" id="start_time" bind:value={start_time} placeholder="user.name">
                                </div>
                            </div>
                            <div class ="section">
                                <div class = "field"> 
                                    <label for="category">Category:</label>
                                    <input type="text" id="category" bind:value={category} placeholder="user.name">
                                </div>
                                <div class = "field"> 
                                    <label for="end_time">End Time:</label>
                                    <input type="text" id="end_time" bind:value={end_time} placeholder="user.name">
                                </div>
                            </div>
                        </div>
                        <button
                    on:click={handleClick}> 
                        Export Commands 
                    </button>
                    </div>
                </div>    
            </div>
        </div>

        <div class = "section">
            
            <div class = "section"> 
                <h2 style = "color: #e6e6e6">.</h2>
                <div class = "tab_body"> 
                    <div class = "tab_head">
                        <span> Export fields </span>
                    </div> 
                    <div class = "tab_content">
                        <span style = "color: #4d4d4d"> For fields that are nullable, 
                                "null" or equivalent will be explicitly used as the value for a particular log entry when no value is available.
                                <div class = "checkbox">
                                    <input type = "checkbox" id = "LogID"> 
                                    <label for ="LogID"> Log ID</label>
                                </div>
                                <div class = "checkbox">
                                    <input type = "checkbox" id = "Source"> 
                                    <label for ="Source"> Source (server or endpoint ID)</label>
                                </div>
                                <div class = "checkbox">
                                    <input type = "checkbox" id = "UID"> 
                                    <label for ="UID"> User ID</label>
                                </div>
                                <div class = "checkbox">
                                    <input type = "checkbox" id = "TID"> 
                                    <label for ="TID"> Task ID</label>
                                </div>
                                <div class = "checkbox">
                                    <input type = "checkbox" id = "Category"> 
                                    <label for ="Category"> Category</label>
                                </div>
                                <div class = "checkbox">
                                    <input type = "checkbox" id = "Level"> 
                                    <label for ="Level"> Level </label>
                                </div>
                                <div class = "checkbox">
                                    <input type = "checkbox" id = "Timestamp"> 
                                    <label for ="Timestamp"> Timestamp</label>
                                </div>
                                <div class = "checkbox">
                                    <input type = "checkbox" id = "Data"> 
                                    <label for ="Data"> Data </label>
                                </div>
                        </span>                
                    </div>    
                </div>
            </div>

            <div class = "section" style = "flex:.2">
                
                <div class = "tab_body"> 
                    <div class = "tab_head">
                        <span> Export options </span>
                    </div> 
                    <div class = "tab_content">
                        <span style = "color: #4d4d4d"> 
                            <div class = "checkbox">
                                <input type = "checkbox" id = "Protocol 1"> 
                                <label for ="Protocol 1"> Export CSV </label>
                            </div>
                            <div class = "checkbox">
                                <input type = "checkbox" id = "Protocol2"> 
                                <label for ="Protocol 2"> Export JSON </label>
                            </div>
                            <div class = "checkbox">
                                <input type = "checkbox" id = "Protocol 3"> 
                                <label for ="Protocol 3"> Export as raw </label>
                            </div>
                            <div class = "checkbox">
                                <input type = "checkbox" id = "Protocol 4"> 
                                <label for ="Protocol 4"> Export </label>
                            </div>
                        </span>
                    </div>    
                </div>     
            </div>

        </div>

    </div>


<style>
    .container {
        flex: 1;
        display: flex;
        flex-direction: row;
        height: 100vh;

    }

    
    .section_outline {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
    border-bottom: 2px solid rgba(77, 77, 77, 0.5);
    }

    .section h2 {
        margin-left: 20px
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
    
</style>