<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let {id, agent, agent_name, developed_by, source_code, version, supported_oss, support_protocols, associated_endpoints} = data;
    console.log(associated_endpoints) // can grab name, hostname, address from this
</script>
all data
{#each Object.values(data) as cell}
        <div class="grid-item">{cell}</div>
{/each}
agent data
{#each Object.values(agent) as cell}
        <div class="grid-item">{cell}</div>
{/each}