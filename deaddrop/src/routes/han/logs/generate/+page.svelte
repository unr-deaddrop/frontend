<script>
    // generate log
    // pick run, logs to generate (include, exclude in a toss in toss out way), output format,

	import Button from '$lib/components/Button.svelte';
import Checkbox from '$lib/components/Checkbox.svelte';
	import DropDown from '$lib/components/DropDown.svelte';
import InputBox from '$lib/components/InputBox.svelte';
	import KanbanBoard from '$lib/components/KanbanBoard.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    let inputStuffParent;
</script>
<PageHeader>Generate Log</PageHeader>
<InputBox bind:inputStuffChild={inputStuffParent} label="label1"/>
{inputStuffParent}
Pick Run <DropDown/>

Output Format <DropDown/>

Include __? <Checkbox/>

Exclude __? <Checkbox/>

<KanbanBoard/>

<Button>Generate</Button>