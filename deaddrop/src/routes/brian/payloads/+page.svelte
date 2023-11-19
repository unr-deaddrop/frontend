<script>
    import PageHeader from "$lib/components/PageHeader.svelte";
    let payloads = [
        {prog: 3, filename: 'deaddrop_test.exe', description: 'created by dd_admin 11-1-23', is_complete: true},
        {prog: 3, filename: 'deaddrop_test2.exe', description: 'created by dd_admin 11-1-23', is_complete: false},
        {prog: 1, filename: 'deaddrop_test3.exe', description: 'created by dd_admin 11-1-23', is_complete: true},
        {prog: 2, filename: 'deaddrop_test4.exe', description: 'created by dd_admin 11-1-23', is_complete: false},
    ];
</script>

<div class="container">
    <ul class="list_container">
        <PageHeader> Payloads </PageHeader>
        {#each payloads as {prog, filename, description, is_complete} (filename)}
            <li>
                <div class = "section_container">
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
                            Modify
                        </div>
                        <div class="content">
                            <span style="background-color: #a60707; color: white; padding: 7px 30px; border-radius: 15px;">
                                Modify
                            </span>
                            
                        </div>
                    </div>
                    <div class = "segment">
                        <div class="outliner">
                        Build Progress
                        </div>
                        <div class="content">
                        {prog}
                        </div>
                    </div>
                    <div class = "segment">
                        <div class="outliner">
                        File
                        </div>
                        <div class="content">
                        {filename}
                        </div>
                    </div>
                    <div class = "segment">
                        <div class="outliner">
                        Description
                        </div>
                        <div class="content">
                        {description}
                        </div>
                    </div>
                    <div class = "segment">
                        <div class="outliner">
                        Status
                        </div>
                        <div class="content">
                            {#if is_complete == true}
                                <img src = "/red_check.svg" alt="complete">
                                
                                {:else}
                                <img src = "/red_circle.svg" alt="incomplete">
                            {/if}

                            
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
        justify-content: space-evenly;
        align-items: center;
    }

    .content img {
        max-width: 17%; /* Ensure the image doesn't exceed its container width */
        height: auto; /* Maintain the aspect ratio of the image */
    }
</style>
