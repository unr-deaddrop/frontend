<script>
    // progress bar
    // this is a progress bar for the task progress?
    // bug where whitespace on left side
    import { tweened } from "svelte/motion";
    import {cubicOut} from "svelte/easing";
    const progressTween = tweened(0, {
        duration: 600,
        easing: cubicOut
    });

    export let progress;
    function updateProgress(){ progressTween.set(progress); } // progress is between 0 and 1
    updateProgress(); // may not be needed idk
    $: progress, updateProgress()


</script>


<div class="outer">
    <div class="inner" style="--progress: {$progressTween * 100}%"/>
</div>

<style>
    .inner, .outer{
        height: 10px;
        border-radius: 10px;
    }
    .outer{
        width: 10vw;
        background-color: transparent;
        /* margin: 10px auto; */
        margin: 10px;
        border: 1px solid #a60707;
    }
    .inner{
        width: var(--progress);
        background-color: #a60707;
    }
</style>