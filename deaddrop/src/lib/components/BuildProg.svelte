<script>
    export let progress;
</script>

<div class="container">
    {#if progress == 1}
        <img src="/red_check.svg" alt="progress">
        <img src="/red_circle.svg" alt="no progress">
        <img src="/red_circle.svg" alt="no progress">
    {:else if progress == 2}
        <img src="/red_check.svg" alt="progress">
        <img src="/red_check.svg" alt="progress">
        <img src="/red_circle.svg" alt="no progress">
    {:else if progress == 3}
        <img src="/red_check.svg" alt="progress">
        <img src="/red_check.svg" alt="progress">
        <img src="/red_check.svg" alt="progress">
    {/if}
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        max-width: 17%;
        height: auto;
    }
</style>
