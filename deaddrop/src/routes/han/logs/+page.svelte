<script>
    // 1+, general logs, generate specific logs/snapshots, specific logs?
    // table of logs
    // table contains status (string), date (date), task description (string), agents used (string/component), donwload report button (button? that queries an api)
    // features - generate snapshots, filters
    /** @type {import('./$types').PageData} */
    import Button from '$lib/components/Button.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
    import LogTable from './LogTable.svelte';
    import {sampleData} from './data.js';
    export let data;
</script>

<PageHeader>Logs</PageHeader>
<Button href='./logs/generate'>Generate Log</Button>
<!-- <Button>Sample</Button> -->
<!-- <ProgressBar progress={.9}></ProgressBar> -->
<LogTable tableData={sampleData}/>