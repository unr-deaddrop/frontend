<!-- Header.svelte -->
<script>
    import SearchBar from "./SearchBar.svelte";
</script>

<header>
    <h1 style="margin-left: 20px;">DeadDrop</h1>
    <div class="container">
        <SearchBar/>
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
        background-color: #a60707;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    h1 {
        flex: 1;
    }

    .container {
        flex: 1;
    }
</style>
