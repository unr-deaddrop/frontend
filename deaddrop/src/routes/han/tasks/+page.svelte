<script>
    /** @type {import('./$types').PageData} */
    // import Button from '../../../lib/Button.svelte'; // should use button, interactionbutton, progressbar, taskrow, taskrowitem, tasktable
    import Button from '$lib/components/Button.svelte';
	import TaskTable from '$lib/components/TaskTable.svelte';
    import ProgressBar from './ProgressBar.svelte';
    import {sampleData} from './data.js';
    export let data;
</script>
DeadDrop
<Button href='./tasks/edit'>Edit</Button>
<Button>Sample</Button>
<ProgressBar progress={.9}></ProgressBar>
<TaskTable tableData={sampleData}/>