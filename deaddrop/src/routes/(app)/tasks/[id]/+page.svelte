<script>
    export let data
    let {task} = data.pagedata
    let task_detail = []
    task_detail[0] = task
    import Pagination from '$lib/components/Pagination.svelte';

</script>

    <div class ="container"> 
        <div class = "segment" style = "flex: .5">
            <div class = "tab_body"> 
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
                    {JSON.stringify(task_detail, null, 2)}
                </div>    
            </div>    
        </div>

        <div class = "segment">
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Associated Logs? </span>
                </div> 
                <div class = "tab_content">
                    <Pagination data = {[]}/>
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

</style>