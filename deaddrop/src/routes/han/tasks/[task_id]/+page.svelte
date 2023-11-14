<script>
    // uses editform, form, inputbox
    // add more details somewhat
    /** @type {import('./$types').PageData} */
    export let data;
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ProgressBar from '../ProgressBar.svelte';
    import {sampleData} from '../data.js';
    let task_id = data["task_id"];
    let task = sampleData.find(obj => obj.id == task_id);
</script>
<PageHeader>Task Details</PageHeader>

<div>
  <p><strong>ID:</strong> {task.id}</p>
  <p><strong>Task Name:</strong> {task.task_name}</p>
  <p><strong>Progress:</strong> {task.progress}% 
    <ProgressBar progress={task.progress/100}/>
  </p>
  <p><strong>Status:</strong> {task.status}</p>
  <p><strong>Agent:</strong> {task.agent}</p>
  
  <p><strong>Description:</strong> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci</p>
</div>