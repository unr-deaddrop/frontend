<script>
    import SvelteTypedJs from 'svelte-typed-js';
    export let string
    console.log(string)
    let str = [string]
</script>

<div class = "chat">
    <img src = "/bird.svg" alt = "bird">
    <span> DeadDrop~</span>
    <SvelteTypedJs typeSpeed=6 backDelay=10000 strings={str} loop=true>
        <span class="typing"></span>
    </SvelteTypedJs>
</div>


<style>
    .chat {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    img {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    span {
        margin-right: 10px;
    }
</style>