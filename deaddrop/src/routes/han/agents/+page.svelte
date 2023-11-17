<script>
    // 3+, general agents, specific agents, edit agent
    // this is a grid of all agents
    // this has a name (string), description (string), list of permissions (object list?), docs (button) 

	import PageHeader from '$lib/components/PageHeader.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>
<PageHeader>Agents</PageHeader>
