<script>
    import {goto} from '$app/navigation'

    async function handleLink(link){
        await goto(link)
    }
</script>

<div class="container">
    <div class= "upper_body">
        <div class = "left"> 
            <h2> Dashboard </h2>
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Statistics </span>
                </div> 
                <div class = "tab_content">
                    this as a thing
                </div>    
            </div>

            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Communications (Last 24 Hours) </span>
                </div> 
                <div class = "tab_content">
                    this as a thing
                </div>    
            </div>

        </div>
        
        <div class = "right"> 
            <h2 style = "color: #e6e6e6">.</h2>
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Quick Links </span>
                </div> 
                <div class = "tab_content">
                    <div class = "quick_links">
                        <button>Go to Django administrative site </button>
                        <button
                        on:click={() => handleLink("/commands")}>
                            Issue command 
                        </button>
                        <button>Generate new payload </button>
                        <button>View recent tasks</button>
                    </div>
                    
                </div>    
            </div>

            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Endpoint Communication Share </span>
                </div> 
                <div class = "tab_content">
                    this as a thing
                </div>    
            </div>
        </div>

    </div>

    <div class = "lower_body"> 
       
        <div class = "tab_body"> 
            <div class = "tab_head">
                <span> Running Tasks </span>
            </div> 
            <div class = "tab_content">
                this as a thing
            </div>    
        
        </div>    
    </div>
</div>

<style>
    .container {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 125vh;
    }

    .upper_body {
        flex: .7;
        display:flex;
        flex-direction: row;
    }

    .left{
        flex: .65;
        display:flex;
        flex-direction: column;
    }

    .left h2 {
        margin: 20px;
    }

    .right{
        flex:.35;
        display:flex;
        flex-direction: column;
    }

    .tab_body {
        flex: 1;
        display:flex;
        flex-direction: column;
        margin: 20px;
        border-radius: 10px;
        border-color: 5px solid darkgray;
        background-color: white;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    }

    .tab_head {
        flex:.15;
        display: flex;
        align-items: center;
        padding: 10px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border: 1px solid darkgrey;
        background-color: #a60707;
        
    }

    .tab_head span {
        color: white;
        font-weight: 300;
    }

    .tab_content{
        padding: 20px;
        flex: 1;
    }
    
    .lower_body {
        flex: .3;
        display: flex;    
    }

    .quick_links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: normal;
    }

    .quick_links button {
    color: white;
    background-color: #a60707;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 7px;
    opacity: 1;
    transition: background-color 0.3s ease; 
    }

    .quick_links button:hover {
    background-color: #8e0606; 
    }

    .quick_links button:active {
    background-color: #6e0404; 
    }
</style>
