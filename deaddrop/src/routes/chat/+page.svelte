<script>
    import { TypedJs } from '$lib'
	import { afterUpdate, tick } from 'svelte';
    let chatlog = ['asdasd', 'wasdasd', 'asda'];
    let value = '';
    let lastChat;

    afterUpdate(() => {
		console.log("afterUpdate");
		if(chatlog) scrollToBottom(lastChat);
    });
        
    $: if(chatlog && lastChat) {
        console.log("tick");
        scrollToBottom(lastChat);
    }

    const scrollToBottom = async (node) => {
        node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
    }; 

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the form from actually submitting
        if (value.trim() !== '') {
            chatlog = [...chatlog, value];
            value = ''; // Clear input after submitting
        }
    }
</script>

<div class="container">
    <div class="header">
        <div class="left_bar"></div>
        <div style="flex: 1"></div>
        <div style="flex: .33"></div>
    </div>
    
    <div class="section" style="flex-direction: row; color: white; display:flex;">
        <div class="left_bar">a</div>
        
        <div class="chat_box">
            <div class="chat_logs" id="logs" bind:this={lastChat}>
                
                {#each chatlog as chat}
                    <TypedJs string = {chat}/>
                {/each}
            </div>
            
            <form class="input_section" id="inpt_area" on:submit|preventDefault={handleSubmit}>
                <input id="txt_input" type="text" bind:value placeholder="Type here..." />
            </form>
        </div>
        
        <div class="right_bar">a</div>
    </div>
</div>

<style>
    :global(body, div) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
        background-color: #36393e;
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100vh; 
    }

    .left_bar{
        background-color: #282b30;
        display: flex;
        flex: .33;
        flex-direction: column;
    }

    .chat_box{
        background-color: #36393e;
        display: flex;
        flex: 1;
        flex-direction: column;
        max-height: 90vh;
    }

    .chat_logs{
        display: flex;
        flex: 1;
        flex-direction: column;
        overflow-y: auto;
        scrollbar-color: #1e2124 #36393e;
    }

    .input_section{
        flex:.15; 
        display: flex;
        justify-content:center;
        align-items: center;
    }

    .right_bar{
        background-color: #36393e;
        flex: .33;
    }

    .header {
        display:flex;   
        flex: .1;  
        box-shadow: 0 1px 1px 1px #1e2124;
        z-index: 3;
    }

    input {
        background-color: #424549;
        border: none;
        flex: 1;
        margin-left: 20px;
        margin-right: 20px;
        border-radius: 10px;
        height: 30px;
        color: white;
        padding-left: 20px;

    }

    .chat{
        color:white
    }

</style>