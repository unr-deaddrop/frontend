<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let {id, protocol, protocol_name, developed_by, source_code, version, supported_oss, definition_path, associated_endpoints} = data;
    console.log(associated_endpoints) // can grab name, hostname, address from this
</script>
all data
{#each Object.values(data) as cell}
        <div class="grid-item">{cell}</div>
{/each}
protocol data
{#each Object.values(protocol) as cell}
        <div class="grid-item">{cell}</div>
{/each}