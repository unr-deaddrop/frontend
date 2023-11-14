<script>
    // uses editform, form, inputbox
    // add more details somewhat
    /** @type {import('./$types').PageData} */
    export let data;
    import PageHeader from '$lib/components/PageHeader.svelte';
    import ProgressBar from '../ProgressBar.svelte';
    import {sampleData} from '../data.js';
    let log_id = data["log_id"];
    let log = sampleData.find(obj => obj.id == log_id);
</script>
<PageHeader>Log Details</PageHeader>

<div>
  <p><strong>ID:</strong> {log.id}</p>
  <p><strong>log Name:</strong> {log.log_name}</p>
  <p><strong>Progress:</strong> {log.progress}% 
    <ProgressBar progress={log.progress/100}/>
  </p>
  <p><strong>Status:</strong> {log.status}</p>
  <p><strong>Agent:</strong> {log.agent}</p>
  
  <p><strong>Description:</strong> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci</p>
</div>