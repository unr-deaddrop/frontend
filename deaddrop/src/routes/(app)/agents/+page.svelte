<script>
    import PieChart from '$lib/components/PieChart.svelte';
    import PaginationDetail from '$lib/components/PaginationDetail.svelte';
    export let data
    let {agents, endpnt_chart} = data.pagedata
    let file_content = '';
    let label_name = 'Select an agent.zip to install';
  
    const handleChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        file_content = reader.result;
      };
  
      reader.readAsText(file);
      label_name = file.name;
    };
    
    
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
                            <PieChart data = {endpnt_chart}/>
                            
                        </div>
                    </div>    
                </div>
            </div>

            <div class = "section">
                <h2 style = "color: #e6e6e6">.</h2>
                <div class = "tab_body"> 
                    <div class = "tab_head">
                        <span> Register an Agent </span>
                    </div> 
                    <div class = "tab_content">
                        <div class = "section">
                            <span class = "description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.
                            </span>
                        </div>

                        <div class = "section" style = "flex-direction:row;">
                            <form action="?/api" method="post" enctype="multipart/form-data">
                                <label for="bundle_path" class = "inputbttn" tabindex= {0}>{label_name}</label>
                                <input type="file" id="bundle_path" name = "bundle_path" on:change={handleChange} hidden = {true}>
                                <button class = "inputbttn" type = "submit"> Start Install </button>
                            </form>
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
                    <PaginationDetail data = {agents} detail = "agents"/>
                </div>    
            </div>
           
        </div>

    </div>

<style>
    
    .container {
        flex: 1;
        display: flex;
        flex-direction: column;
        /* height: 125vh; */
    }

    .chart_container{
        width: 100%;
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .description {
        margin-bottom: 15px;
    }
  
    .inputbttn{
        box-sizing: border-box;
        background-color: #a60707;
        color: white;
        border-radius: 5px;
        padding: 7px;
        font-size: 1em;
        border-color: #a60707;
    }

    .inputbttn:hover{
        box-sizing: border-box;
        background-color: #7b0606;
        color: white;
        border-radius: 5px;
        padding: 7px;
        font-size: 1em;
        border-color: #7b0606;
    }

</style>