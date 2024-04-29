<script>
    import ChatLeftBar from './ChatLeftBar.svelte';
    import ChatHeader from './ChatHeader.svelte';
    import AniSphere from '../../lib/components/AniSphere.svelte'

    import { TypedJs } from '$lib'
	import { afterUpdate, tick } from 'svelte';
    let chatlog = [];
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
    
    <ChatHeader/>
    <div class="section" style="flex-direction: row; color: white; display:flex;">
        <ChatLeftBar></ChatLeftBar>
        
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
        
        <div class="right_bar">
            <AniSphere/>
        </div>
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
        color: white;
        justify-content: center;
        align-items: center;
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
        padding-top: 20px;
        padding-left: 20px;
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


</style>