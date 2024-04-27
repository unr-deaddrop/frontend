<script>
    import { page } from '$app/stores';
    export let data
    
</script>


<div class = "container">

    <h1>{$page.status}: {$page.error.message}</h1>

</div>

<style>
    h1 {
        margin-left: 20px;
    }
</style>