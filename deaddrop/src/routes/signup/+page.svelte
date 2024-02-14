<script>
    import {goto} from '$app/navigation'
	import ActionButton from '$lib/components/ActionButton.svelte';
    let username = ""
    let passwd = ""
    let confrm = ""
    $: err = false
    $: isInputsFilled = username.length > 0 && passwd.length > 0 && confrm.length >0;

    function handleRegister(err) {
        if(passwd != confrm){
            err = true
            return err
        }
         
        else {
            goto('/login')
        }
    }
</script>

    <div class = "container">
        <div class = "section"></div>
        <div class = "signup_bar"> 
            <h1> Register DeadDrop Account </h1>
            <span> Already have an account? <a href = /login> Log in </a></span>
            <div class = "field"> 
                <label for="username">Username:</label>
                <input type="text" id="username" bind:value={username} placeholder="Enter your username">
            </div>
            
            <div class = "field"> 
                <label for="email">Password:</label>
                <input type="password" id="password" bind:value={passwd} placeholder="Enter your password">
            </div>

            <div class = "field"> 
                <label for="email">Confirm:</label>
                <input type="password" id="password" bind:value={confrm} placeholder="Enter your password">
            </div>
    
            <div hidden = {err}>

            </div>

            <div class ="field">
                <button 
                on:click={handleRegister(err)}
                disabled = {!isInputsFilled}> 
                    Register
                </button>
            </div>
        </div>
        <div class = "section"></div>
    </div>

<style>
    :global(body, div) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
    flex: 1;
    display: flex;
    flex-direction: row;
    height: 100vh;
    }

    .section {
        background-color: #a60707;
    }

    .signup_bar {
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: white;
        align-items: center;
        justify-content: center;
       
    }

    .field label {
        color: black
    }

    .field button {
        flex: .5;
        margin-left: 40px;
        margin-right: 40px;
        background-color: #a60707;
        color: white;
        border: 3px black;
        border-radius: 3px;
        outline: none;
        opacity: .9;
        transition: opacity 0.3s ease
    }

    .field button:disabled {
        opacity: .5;
    }

    .field button:hover:not([disabled]) {
        opacity: 1;
    }

    .field button:active:not([disabled]) {
        border: 1px solid darkgray
    }

    a {
        color: #a60707;
    }
</style>