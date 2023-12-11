<script>
    import { comms_data, tasks } from '$lib/components/data';
    import LineChart from '$lib/components/LineChart.svelte';
    import Pagination from '$lib/components/Pagination.svelte';
</script>

    <div class = "container"> 
        <div class = "section" style = "flex: 1">
            <h2> Endpoints </h2>
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Network graph view </span>
                </div> 
                <div class = "tab_content" style = " display:flex; justify-content:center">
                    <LineChart data = {comms_data}/>
                </div>    
            </div>
        </div>
        <div class = "section" style = "flex:1">
            <div class = "tab_body">
                <div class = "tab_head">
                    <span> Registered endpoints </span>
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
        height: 125vh;
    }

</style>