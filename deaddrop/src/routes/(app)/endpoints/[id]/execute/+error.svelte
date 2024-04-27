<script>
    import { page } from '$app/stores';
    
    export let data;
    let {endpoint_id, cmd_list, cmd_options, agent_commands} = data;
</script>


<div class = "container">
    {#if endpoint_id == undefined}
        <h1>Error: Endpoint ID not found</h1>
        
        {:else}
        <h1>{$page.status}: {$page.error.message}</h1>
    {/if}
</div>

<style>
    h1 {
        margin-left: 20px;
    }
</style>


