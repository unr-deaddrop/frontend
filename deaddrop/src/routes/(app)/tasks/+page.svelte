<script>
    import Dropdown from "$lib/components/Dropdown.svelte";
    import PaginationDetail from '$lib/components/PaginationDetail.svelte';
    export let data
    let {tasks, task_stats} = data.pagedata
    const tasks_blacklist = ['task_id', 'periodic_task_name', 'task_name', 'task_args', 'task_kwargs', 'worker', 'content_type', 'content_encoding', 'result', 'traceback', 'meta', 'task_creator']
</script>

    <div class = "container">
        <div class = "section" style = "flex:.25"> 
            <h2 style = "margin-left: 20px;"> Tasks</h2>
            <div class = "task_bar">
                <div class ="task_tab">
                    <div class = "task_content">
                        <span style = "color: #a60707"> Running Tasks </span>
                        <span style = "color:black"> {task_stats.running} </span>
                    </div>
                    <img src ="clock.svg" alt ="clock">
                </div>
                <div class ="task_tab">
                    <div class = "task_content">
                        <span> Open Callbacks </span>
                        <span style = "color:black"> {task_stats.callbacks} </span>
                    </div>
                    <img src ="phone-solid.svg" alt ="phone">
                </div>
                <div class ="task_tab">
                    <div class = "task_content">
                        <span> Total Tasks </span>
                        <span style = "color:black"> {task_stats.total} </span>
                    </div>
                    <img src ="clipboard-g.svg" alt ="clipboard">
                </div>
                <div class ="task_tab">
                    <div class = "task_content">
                        <span> Completed Tasks </span>
                        <span style = "color:black"> {task_stats.completed} </span>
                    </div>
                    <img src ="check-g.svg" alt ="checkmark">
                </div>
            </div>
        </div>
        
        <!--
        <div class = "section">
            <div class = "drop_container">
                
                <Dropdown title = "Running Tasks" radius_side = {1}/>
                <Dropdown title = "Open Callbacks"/>
                <Dropdown title = "Periodic Tasks"  radius_side = {2}/>
            
        </div>
        -->
        <div class ="section" style = "flex: 1.6">
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> All tasks </span>
                </div> 
                <div class = "tab_content">
                    <PaginationDetail table_id = "full_tasks_table" data = {tasks} blacklist ={tasks_blacklist} detail = "tasks"/>
                </div>    
            </div>
        </div>
    </div>

<style>
    .container {
        flex: 1;
        display: flex;
        flex-direction: column;
        /* height: 100vh; */
    }

    .drop_container{
        margin-left: 20px;
        margin-right: 20px;
    }

    .task_bar{
        flex: 1;
        display:flex;
        flex-direction: row;
        margin-left: 10px;
        margin-right: 10px;
    }

    .task_tab{
        flex: 1;
        display:flex;
        flex-direction: row;
        background-color: white;
        border: 1px solid #4d4d4d;
        border-radius: 10px;
        align-items: center;
        margin:10px;
    }

    .task_content{
        flex:.7;
        display:flex;
        height:100%;
        flex-direction: column;
        justify-content: center;
    }

    .task_content span{
        color: #4d4d4d;
        margin-left:20px;
    }

    .task_tab img{
        flex:.25;
        max-height:50%;
        max-width: 50%;
    }   
</style>