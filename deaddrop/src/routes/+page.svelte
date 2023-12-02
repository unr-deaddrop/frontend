<script>
    let username = ""
    let passwd = ""

    function handleButtonClick() {

    }

</script>

<div class = "container">
    <div class = "login_bar">
        <h1> Sign in to DeadDrop</h1>
        <label for="username">Username:</label>
        <input type="text" id="username" bind:value={username} placeholder="Enter your username">

        <label for="email">Password:</label>
        <input type="password" id="password" bind:value={passwd} placeholder="Enter your password">
        <button on:click={handleButtonClick}> Login </button>

    </div>
    
    <div class ="body"> 
        insert img here
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
        flex: .25;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #a60707;
    }

    .login_bar h1 {
        color: white;
    }

    .login_bar label {
        color: white;
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