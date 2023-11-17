<script>
    // generate log
    // pick run, logs to generate (include, exclude in a toss in toss out way), output format,

	import Button from '$lib/components/Button.svelte';
    import Checkbox from '$lib/components/Checkbox.svelte';
	import Svelecte from 'svelecte';
    import InputBox from '$lib/components/InputBox.svelte';
	import KanbanBoard from '$lib/components/KanbanBoard.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    let inputStuffParent;
    let checked1;
</script>
<PageHeader>Generate Log</PageHeader>
<div>
    <InputBox bind:inputStuffChild={inputStuffParent} label="Log Name"/>
    
    Pick Run <Svelecte options={["11/12/23 Run1", "11/12/23 Run2"]}/>
    
    Output Format <Svelecte options={["CSV", "json"]}/>
    
    Include __? <Checkbox bind:checked={checked1}/>
    
    Exclude __? <Checkbox/>
    
    <KanbanBoard/>
    
    <Button>Generate</Button>
</div>