<script src=https://cdn.jsdelivr.net/npm/pretty-print-json@2.1/dist/pretty-print-json.min.js>
    import Pagination from '$lib/components/Pagination.svelte'
    import { prettyPrintJson } from 'pretty-print-json'
    import { onMount } from 'svelte'
    export let data
    let {task} = data.pagedata
    let task_detail = []
    task_detail[0] = task
    let prettyPrintedTask = ''

    onMount(() => {
        const elem = document.getElementById('results');
        prettyPrintedTask = prettyPrintJson.toHtml(JSON.parse(task.result))
        elem.innerHTML = prettyPrintedTask;
    });
</script>
    <link rel=stylesheet href=https://cdn.jsdelivr.net/npm/pretty-print-json@2.1/dist/css/pretty-print-json.css>
    

    <div class ="container"> 
        <div class = "segment">
            <div class = "tab_body" style = "flex: .25"> 
                <div class = "tab_head">
                    <span> Overview </span>
                </div> 
                <div class = "tab_content">
                    <div class = "segment">
                        <div class= "stat_column">
                            <div class = "statistic">
                                <b> Source: </b>
                                <span> {task.task_creator}</span>
                            </div>
                            <div class = "statistic">
                                <b> Initiating User </b>
                                <span> {task.worker}</span>
                            </div>
                            <div class = "statistic">
                                <b> Type </b>
                                <span> {task.periodic_task_name}</span>
                            </div>
                        </div>
                        <div class= "stat_column">
                            <div class = "statistic">
                                <b> Start Time  </b>
                                <span> {task.date_created}</span>
                            </div>
                            <div class = "statistic">
                                <b> Start Time  </b>
                                <span> {task.date_done}</span>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>    
        </div>
        
        <div class = "segment">
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Task Results </span>
                </div> 
                <div class = "tab_content">
                    <pre id ="results" class =json-container></pre>
                </div>    
            </div>    
        </div>
        
    </div>


<style>
    .container {
		display: flex;
		flex-direction: column;
		height: 100vh; 
	}

    .segment {
        display: flex;
        flex-direction: row;
        flex: 1;
    }

    .stat_column{
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .statistic{
        display:flex;
        flex-direction: row;
        flex: 1;
    }

    .statistic span {
        margin-left: 5px;
    }

    .tab_body{
        overflow-x: auto;
        overflow-y:auto;
        max-height: 50vh
    }
    
    .tab_content{
        overflow-x: auto;
        overflow-y:auto
    }
    
    .tab_head {
    width: 100%;
    
    }
  
</style>