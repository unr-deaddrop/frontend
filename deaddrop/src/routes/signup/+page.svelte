<script>
    import {goto} from '$app/navigation'
    $: username = ""
    $: passwd = ""
    $: confirm = ""
    $: err = false
    $: isInputsFilled = username.length > 0 && passwd.length > 0 && confirm.length >0;

    async function handleRegister() {
        if(passwd != confirm){
            err = true
        }
         
        else {
            console.log(username)
            console.log(passwd)

            const res = await fetch('http://127.0.0.1:8000/backend/users/sign_up/', {
                method: 'POST',
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                body: JSON.stringify({
                    "username": username,
                    "password": passwd,
            })
            })

            const json = await res.json();
            console.log(JSON.stringify(json));
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
                <label for="password">Password:</label>
                <input type="password" id="password" bind:value={passwd} placeholder="Enter your password">
            </div>

            <div class = "field"> 
                <label for="confirm">Confirm:</label>
                <input type="password" id="confirm" bind:value={confirm} placeholder="Enter your password">
            </div>
    
            <div hidden = {err}>

            </div>

            <div class ="field">
                <button 
                on:click={handleRegister}
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