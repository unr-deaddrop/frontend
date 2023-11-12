<!-- Layout.svelte -->

<script>
    import Header from "./Header.svelte";
    import SideBar from "./SideBar.svelte";
</script>

<div class = "container">
    <SideBar/>
    <div class="content">
        <Header/>
        <main>
            <slot />
        </main>
    </div>
</div>

<style>
    .container {
        display: flex;
    }

    .content {
        flex: 1;
    }
</style>