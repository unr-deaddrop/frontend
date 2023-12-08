<script>

</script>

    <div class = "container">
        
        <div class = "section">
            <h2> Reporting and Export logs</h2>
            <div class = "tab_body"> 
                <div class = "tab_head" style = "flex:.08">
                    <span> Filters </span>
                </div> 
                <div class = "tab_content">
                    <div class = "section"> hello</div>
                    <div class = "section"> world</div>
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

    .section {
        flex:1;
        display: flex;
        flex-direction: column;
    }
    
    .section h2 {
        margin-left: 20px
    }

    
</style>