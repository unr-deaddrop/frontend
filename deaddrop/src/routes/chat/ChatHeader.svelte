<script>
    import TypedJs from '@loscrackitos/svelte-typed-js';
	import SpaceShip from '../../lib/components/SpaceShip.svelte';

</script>

<div class="header">
    <div class="left_bar">
     
        <h1 style="margin-bottom: -10px;">
            DeadDrop 
        </h1>
        <h2>
            v7af5c8e
        </h2>
     
        
    </div>
    <div class = "center">
         <SpaceShip/>
    </div>
</div>

<style>
    :global(body, div) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
    }

    .left_bar{
        background-color: #282b30;
        color: white;
        justify-content: center;
        align-items: center;
        display: flex;
        flex: .248;
        flex-direction: column;
    }

    .center{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header {
        display:flex;   
        flex: .1;  
        box-shadow: 0 3px 3px 3px #1e2124;
        z-index: 3;
    }


</style>

