<script>
    import {goto} from '$app/navigation'

    let username = ""
    let passwd = ""
    let auth = true
    $: isInputsFilled = username.length > 0 && passwd.length > 0;

    function handleButtonClick() {
        auth? goto('/dashboard') : console.log("error")
    }

    // POST - creates new user in db
    async function doPost () {
        const res = await fetch('http://127.0.0.1:8000/backend/get_token/', {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                "Authorization": "Token 9163f165e84167aae5eba41367c7f2673f0ea9a7"
            },
            body: JSON.stringify(
                {
                    "username": username,
                    "password": passwd
                }
            )
        })
        
        const json = await res.json()
        console.log(JSON.stringify(json))
    }

    // GET METHOD (NOT USED, only for testing)
    async function doGet () {
        const res = await fetch('http://127.0.0.1:8000/backend/credentials/', {
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                "Authorization": "Token 9163f165e84167aae5eba41367c7f2673f0ea9a7"
            },
            method: 'GET'
        })
        
        const json = await res.json()
        console.log(JSON.stringify(json))
    }

</script>

<div class = "container">
    <div class = "login_bar">
       
      
        <h1> Sign in to DeadDrop</h1>
        <div class = "login_section">
            <div class = "field"> 
                <label for="username">Username:</label>
                <input type="text" id="username" bind:value={username} placeholder="Enter your username">
            </div>
            
            <div class = "field"> 
                <label for="email">Password:</label>
                <input type="password" id="password" bind:value={passwd} placeholder="Enter your password">
            </div>
    
            <div class ="field">
                <button 
                on:click={doGet}
                disabled = {!isInputsFilled}> 
                    Sign In
                </button>
            </div>
                
            
        </div>
    </div>
    
    <div class ="body"> 
        <img style = "height:100%; width: 100%" src ="test_graphic.webp" alt = "deaddrop graphic"/>
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

   
</style>