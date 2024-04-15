<script>
    export let pages = 1
    function getPage(page) {
        let searchParams = new URLSearchParams(window.location.search);
        let currentPage = searchParams.get('page') || '1';
        if (page == "next") {
            searchParams.set('page', Number(currentPage) + 1);
        } else if (page == "prev") {
            searchParams.set('page', Number(currentPage) - 1);
        } else {
            searchParams.set('page', page);
        }
        window.location.search = searchParams.toString();
    }
</script>

<div class = "container">
    <button onclick="{getPage}getPage('prev', {pages})"> &lt;&lt; </button>
    {#each {length: pages} as _,i}
        <button onclick="{getPage}getPage({i+1}, {pages})">{i+1}</button>
    {/each}
    <button onclick="{getPage}getPage('next', {pages})"> &gt;&gt;</button>
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
        color: #a60707;
        transition: 3s smooth;
    }

    .container button:hover{
        background-color: whitesmoke
    }

</style>
