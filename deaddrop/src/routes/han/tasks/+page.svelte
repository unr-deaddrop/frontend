<script>
    // 2+ ss, general tasks, specific tasks
    /** @type {import('./$types').PageData} */
    // import Button from '../../../lib/Button.svelte'; // should use button, interactionbutton, progressbar, taskrow, taskrowitem, tasktable
    import Button from '$lib/components/Button.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
    import TaskTable from './TaskTable.svelte';
    import {sampleData} from './data.js';
    export let data;
</script>
<PageHeader>Task Manager</PageHeader>
<!-- <Button href='./tasks/edit'>Edit</Button>
<Button>Sample</Button> -->
<!-- <ProgressBar progress={.9}></ProgressBar> -->
<TaskTable tableData={sampleData}/>