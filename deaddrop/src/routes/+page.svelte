<script>
    import { onMount } from 'svelte';
    import { goto } from "$app/navigation";
    //only navigate when component is mounted
    onMount(() => {
        goto('/login');
    });
</script>

    