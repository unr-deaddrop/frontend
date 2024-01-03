<script>
    import { tasks } from '$lib/components/data';
    import Dropdown from "$lib/components/Dropdown.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    export let data;
    let {task_list, running_tasks, completed_tasks} = data;
    console.log(task_list) // you can yoink the counts from here
    console.log((running_tasks).length) // you can yoink the counts from here
    console.log((completed_tasks)) // you can yoink the counts from here
</script>
running tasks length
{(running_tasks).length}
all data
{#each Object.values(data) as cell}
        <div class="grid-item">{cell}</div>
{/each}

    <div class = "container">
        <div class = "section" style = "flex:.25"> 
            <h2 style = "margin-left: 20px;"> Tasks</h2>
            <div class = "task_bar">
                <div class ="task_tab">
                    <div class = "task_content">
                        <span style = "color: #a60707"> Running Tasks </span>
                        <span style = "color:black"> 13 </span>
                    </div>
                    <img src ="favicon.png" alt ="placeholder">
                </div>
                <div class ="task_tab">
                    <div class = "task_content">
                        <span> Open Callbacks </span>
                        <span style = "color:black"> 12 </span>
                    </div>
                    <img src ="favicon.png" alt ="placeholder">
                </div>
                <div class ="task_tab">
                    <div class = "task_content">
                        <span> Total Tasks </span>
                        <span style = "color:black"> 111 </span>
                    </div>
                    <img src ="favicon.png" alt ="placeholder">
                </div>
                <div class ="task_tab">
                    <div class = "task_content">
                        <span> Completed Tasks </span>
                        <span style = "color:black"> 85 </span>
                    </div>
                    <img src ="favicon.png" alt ="placeholder">
                </div>
            </div>
        </div>
        
        <div class = "section">
            <div class = "drop_container">
                <Dropdown title = "Running Tasks" radius_side = {1}/>
                <Dropdown title = "Open Callbacks"/>
                <Dropdown title = "Periodic Tasks"  radius_side = {2}/>
            </div>
        </div>

        <div class ="section" style = "flex: 1.6">
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> All tasks </span>
                </div> 
                <div class = "tab_content">
                    <Pagination data = {tasks}/>
                </div>    
            </div>
        </div>
    </div>

<style>
    .container {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100vh;
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