<script>
    export let state;
</script>

<div class="container">
    {#if state == false}
        <div class="gray_container">
            <div class="gray_circle"></div>
        </div>
    {:else}
        <div class = "red_container">
            <div class ="red_circle"></div>
        </div>
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
    }

    .gray_container {
        background-color: darkgray;
        width: 90px;
        height: 30px;
        border-radius: 15px;
        display: flex; /* Add display: flex to make it a flex container */
    }

    .gray_circle {
        background-color: gainsboro;
        padding: 15px 15px;
        border-radius: 15px;
        margin-right: auto; /* Move the circle to the far right within .container */
    }

    .red_container {
        background-color: #a60707;
        width: 90px;
        height: 30px;
        border-radius: 15px;
        display: flex; /* Add display: flex to make it a flex container */
    }

    .red_circle {
        background-color: lightcoral;
        padding: 15px 15px;
        border-radius: 15px;
        margin-left: auto; /* Move the circle to the far right within .container */
    }
</style>
