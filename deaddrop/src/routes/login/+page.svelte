<script>
    let username = ""
    let passwd = ""
    $: isInputsFilled = username.length > 0 && passwd.length > 0;
    
    export let data
    export let form;

</script>

<div class = "container">
    <div class = "login_bar">
       
      
        <h1> Sign in to DeadDrop</h1>

        <form method = "POST">
        <div class = "login_section">
            <div class = "field"> 
                <label for="username">Username:</label>
                <input type="text" id="username" name = "username" bind:value={username} placeholder="Enter your username">
            </div>
            
            <div class = "field"> 
                <label for="email">Password:</label>
                <input type="password" id="password" name = "password" bind:value={passwd} placeholder="Enter your password">
            </div>

            {#if form !== null}
            <div class="error">
                {#each form["messages"] as msg}
                    <div class="flex justify-center items-center">{msg}</div>
                {/each}
            </div>
            {/if}       
    
            <div class ="field">
                <button 
                disabled = {!isInputsFilled}> 
                    Sign In
                </button>
            </div>
                
            <span class = "signup"> 
                Don't have an account? 
                <a href = "/signup" class = "signup"> Sign up </a>
            </span>
        </div>
        {#if data == true}
            goto('/dashboard')
        {/if}
        </form>

    </div>
    
    <div class ="body"> 
        <img style = "height:100%; width: 100%" src ="/test_graphic.webp" alt = "deaddrop graphic"/>
    </div>
    
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

    .login_bar {
        flex: .33;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background-color: #a60707;
    }

    .login_bar h1 {
        color: white;
        
    }

    .login_section {
        flex: .33;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%
    }

    .field button {
        flex: .5;
        margin-left: 40px;
        margin-right: 40px;
        background-color: white;
        color: black;
        border: none;
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

    .body {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #e6e6e6;
    }

    .signup{
        color: gainsboro;
        font-size: 12;
       
    }

    .signup a{
        color: whitesmoke
    }

    .error {
        color: white;
    }

</style>