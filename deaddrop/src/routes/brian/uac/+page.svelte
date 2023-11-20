<script>
    import PageHeader from "$lib/components/PageHeader.svelte";
    import Switch from "$lib/components/Switch.svelte";
    let usrs = [
        {usr: "DD_ADMIN1", hide: true, active: true, admin_status:true},
        {usr: "DD_ADMIN2", hide: false, active: true, admin_status:true}
    ];
</script>

    <div class = "container">
        <ul class = "list_container">
            <PageHeader> User Access Control </PageHeader>
            {#each usrs as {usr, hide, active, admin_status}(usr)}
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
                        <div class = "outliner">
                            Username
                        </div>
                        <div class = "content">
                            {usr}
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
                        <div class = "outliner">
                            Hide Username
                        </div>
                        <div class = "content">
                            <Switch state = {hide}/>
                        </div>
                    </div>
                    <div class = "segment">
                        <div class = "outliner">
                            Account Active
                        </div>
                        <div class = "content">
                            <Switch state = {active}/>
                        </div>
                    </div>
                    <div class = "segment">
                        <div class = "outliner">
                            Admin Status
                        </div>
                        <div class = "content">
                            <Switch state = {admin_status}/>
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