<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let {id, log, source, user, task, task_result} = data;
</script>
all data
{#each Object.values(data) as cell}
        <div class="grid-item">{JSON.stringify(cell)}</div>
{/each}