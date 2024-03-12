<script>
    import { tasks } from '$lib/components/data';
    import Pagination from '$lib/components/Pagination.svelte';

    export let data;
    
</script>

    <div class = "container">
        <div class ="section">
            <h2>Credentials</h2>
            <div class = "tab_body">
                <div class = "tab_head">
                    <span> Stored credentials </span>
                </div> 
                <div class = "tab_content">
                    <Pagination data = {tasks}/>
                </div>    
            </div>
        </div>
        <div class = "section" style = "flex:.25"> 
            <h2 style = "color: #e6e6e6">.</h2>
        </div>
    </div>


<style>
.container {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 90vh;
    }

</style>