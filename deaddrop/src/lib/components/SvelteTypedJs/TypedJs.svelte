<script>
    import SvelteTypedJs from 'svelte-typed-js';
    export let string;
    export let typeSpeed = 6;
    export let backDelay = 10000;
    export let loop = true;
    export let smartBackspace = true;
    export let shuffle = true;
    export let fadeOut = true;
    export let showCursor = true;
    
    console.log(string)
    let str = [string]
</script>

<div class = "chat">
    <SvelteTypedJs 
        typeSpeed={typeSpeed} 
        backDelay={backDelay} 
        strings={str} 
        loop={loop} 
        smartBackspace={smartBackspace} 
        shuffle={shuffle} 
        fadeOut={fadeOut} 
        showCursor={showCursor}
    >
        <span class="typing"></span>
    </SvelteTypedJs>
</div>


<style>
</style>