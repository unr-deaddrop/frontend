<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let {id, agent, agent_name, associated_endpoints} = data;
</script>
<!-- all data -->
{#each Object.values(data) as cell}
        <div class="grid-item">{cell}</div>
{/each}
<!-- agent data -->
{#each Object.values(agent) as cell}
        <div class="grid-item">{cell}</div>
{/each}