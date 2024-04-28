<script>
    import SvelteTypedJs from 'svelte-typed-js';
    export let string
    console.log(string)
    let str = [string]
</script>


<SvelteTypedJs typeSpeed=6 backDelay=10000 strings={str} loop=true>
    <span class="typing"></span>
</SvelteTypedJs>
