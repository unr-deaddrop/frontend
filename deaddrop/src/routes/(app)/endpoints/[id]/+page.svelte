<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let {id, endpoint, endpoint_name, local_connections, connected_endpoints, associated_tasks} = data;
    console.log(connected_endpoints) // can grab name, hostname, address from this
    console.log(associated_tasks) // can grab user, timestamp from this
</script>
all data
{#each Object.values(data) as cell}
        <div class="grid-item">{cell}</div>
{/each}
endpoint data
{#each Object.values(endpoint) as cell}
        <div class="grid-item">{cell}</div>
{/each}
connected_endpoints data
{#each Object.values(connected_endpoints) as cell}
        <div class="grid-item">{cell}</div>
{/each}