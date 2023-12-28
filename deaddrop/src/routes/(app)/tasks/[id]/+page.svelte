<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let {id, task, endpoint, user, task_result, associated_logs} = data;
    console.log(task) // can grab start_time, end_time, in_progress
    console.log(endpoint) // can grab name, endpoint_id
    console.log(task_result) // can grab endpoint, user, start_time
    console.log(associated_logs) // can grab source, timestamp

</script>
all data
{#each Object.values(data) as cell}
        <div class="grid-item">{cell}</div>
{/each}