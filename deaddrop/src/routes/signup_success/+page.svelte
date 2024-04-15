<script>
    import { goto } from "$app/navigation";
    function nav(){goto('/login')}
</script>

    
    <div class = "container">
        <div class = "section"></div>
        
        <div class = "signup_bar">
            <h1> Sign Up Successful</h1> 

            <div class ="field">
                <button on:click = {nav}>
                    Return to Login
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

    .field button:hover:not([disabled]) {
        opacity: 1;
    }

    .field button:active:not([disabled]) {
        border: 1px solid darkgray
    }

</style>