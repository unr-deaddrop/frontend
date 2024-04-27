<!-- Header.svelte -->
<script>
    import SearchBar from "./SearchBar.svelte";
</script>

<header>
    <div class="container">
        <spam>deaddrop server@ff58a20 (demo day build)</spam>
    </div>
    <div class="container"></div>
</header>

<style>
    :global(body, header) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    header {
        background-color: white;
        color: black;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 10vh;
        padding: 20px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        
    }

    .container {
        flex: 1;
    }
</style>
