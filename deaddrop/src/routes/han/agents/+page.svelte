<script>
    import PageHeader from "$lib/components/PageHeader.svelte";
    let agents = [
        {name: "Agent1", elapsed:"3:07"},
        {name: "Agent2", elapsed:"3:00"},
        {name: "Agent3", elapsed:"1:50"},
    ];
</script>

    <div class = "container">
        <ul class = "list_container">
            <PageHeader> Agents </PageHeader>
            {#each agents as {name, elapsed}(name)}
                <li>
                    <div class ="section_container">
                        <div class = "segment">
                            <div class="outliner">
                                Delete
                            </div>
                            <div class="content">
                                <img src="/trash_can_red.svg" alt = "trash_can"> 
                            </div>
                        </div>
                        <div class = "segment">
                            <div class="outliner">
                                Agent Name
                            </div>
                            <div class="content">
                                {name}
                            </div>
                        </div>
                        <div class = "segment">
                            <div class="outliner">
                                Docs
                            </div>
                            <div class="content">
                                <span style="background-color: #a60707; color: white; padding: 7px 30px; border-radius: 15px;">
                                    Edit
                                </span>
                            </div>
                        </div>
                        <div class = "segment">
                            <div class="outliner">
                                Permissions
                            </div>
                            <div class="content">
                                <span style="background-color: #a60707; color: white; padding: 7px 30px; border-radius: 15px;">
                                    Edit
                                </span>
                            </div>
                        </div>
                        <div class = "segment">
                            <div class="outliner">
                                Time Elapsed
                            </div>
                            <div class="content">
                                {elapsed}
                            </div>
                        </div>
                        <div class = "segment">
                            <div class = "outliner">
                                More...
                            </div>
                            <div class = "content">
                                <img src = "/down_arrow.svg" alt = "show more"> 
                            </div>
                        </div>
                    </div>
                </li>

            {/each}
        </ul>
    </div>

<style>
    .container {
        display: flex;
        height: 100vh;
    }

    .list_container {
        flex: 1;
        overflow-y: auto; 
        margin-left: 0%;
    }


    li {
        display: flex;
        flex-direction: column; 
        
        list-style-type: none;
        margin: 1%;
        padding: 2.5%;
    }

    .section_container {
        display: flex;
        flex-direction: row;
    }

    .segment{
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .outliner{
        flex: .1;
        display:flex;
        border-bottom: 3px solid #ccc;
        padding: 0.5rem;
        margin-bottom: 0;
        justify-content: space-evenly;
    }

    .content {
        flex: 1;
        display:flex;
        padding: 1rem;
        margin-bottom: 0.2rem;
        justify-content: center;
        align-items: center;
    }

    .content img {
        max-width: 17%; /* Ensure the image doesn't exceed its container width */
        height: auto; /* Maintain the aspect ratio of the image */
    }
</style>