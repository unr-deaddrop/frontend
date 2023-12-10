<script>
    import ActionButton from "./ActionButton.svelte";
</script>

    <div class = "container">
        <button> &lt;&lt; </button>
        <button> 1 </button>
        <button> 2 </button>
        <button> 3 </button>
        <button> &gt;&gt;</button>
    </div>


<style>
    .container{
        flex: 1;
        display:flex;
        
    }

    .container button{
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: 1px solid #4d4d4d;
        outline:none;
        color: #460707;
        transition: 3s smooth;
    }

    .container button:hover{
        background-color: whitesmoke
    }

</style>