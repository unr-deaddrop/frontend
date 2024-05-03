<script>
    import ChatLeftBar from './ChatLeftBar.svelte';
    import ChatHeader from './ChatHeader.svelte';
    import AniSphere from '../../lib/components/AniSphere.svelte'
    import SpaceShip from '$lib/components/SpaceShip.svelte'

    import { TypedJs } from '$lib'
	import { afterUpdate, tick } from 'svelte';
    let chatlog = [];
    let value = '';
    let lastChat;

    afterUpdate(() => {
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
                <div class="chat">
                    <img src = "/bird.svg" alt = "bird">
                    <span> DeadDrop~</span>
                        <TypedJs string = {chat}/>
                </div>
                {/each}
            </div>
            
            <form class="input_section" id="inpt_area" on:submit|preventDefault={handleSubmit}>
                <input id="txt_input" type="text" bind:value placeholder="Type here..." />
            </form>
        </div>
        
        <div class="right_bar">
            a
            <div style ="z-index: -1" >
                <AniSphere/>
            </div>
        </div>
    </div>
</div>

<style>
    .chat {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    img {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    span {
        margin-right: 10px;
    }
    
    .container {
        background-color: #36393e;
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100vh; 
    }

    .chat_box{
        background-color: #36393e;
        display: flex;
        flex: 1;
        flex-direction: column;
        max-height: 90vh;
        overflow-x: auto;
    }

    .chat_logs{
        display: flex;
        flex: 1;
        flex-direction: column;
        overflow-y: auto;
        scrollbar-color: #1e2124 #36393e;
        padding-top: 20px;
        padding-left: 20px;
        z-index: 1;
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