<script>
    import PageHeader from "$lib/components/PageHeader.svelte";
</script>

<div class="container">
    <PageHeader> Learning Center </PageHeader>

    <div class="item">
        <div class="icon"> 
            <img src="/hammer.svg" alt="constructing payload symbol">
        </div>
        <div class="content"> 
            <h1> Constructing Payloads </h1>
        </div>
    </div>

    <div class="item">
        <div class="icon"> 
            <img src="/filter.svg" alt="filter logs symbol">    
        </div>
        <div class="content"> 
            <h1> Filtering Logs </h1>
        </div>
    </div>

    <div class="item">
        <div class="icon"> 
            <img src="/user_icon.svg" alt="user icon symbol">        
        </div>
        <div class="content"> 
            <h1> Setting Up Users </h1>
        </div>
    </div>
</div>

<div class="container2">
    <div class="outline">
        <span> View All</span>
        <img src = "/down_arrow.svg" alt = "view more arrow">
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        height: 75vh;
    }

    .container2 {
        display: flex;
        flex-direction: column;
        height: 25vh;
    }

    .outline {
        flex: .1;
        justify-content: space-around;
        color: black;
        border-bottom: 3px solid black;
        margin-left: 30px;
    }

    .item {
        display: flex;
        flex: 0.33;
        margin: 30px;
        position: relative;
    }

    .outline img{
        position: relative;
        margin-bottom: -18px;
    }

    .icon {
        flex: 0.2;
        background-color: #a60707;
        border-radius: 15px;
        display: flex;

        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 2; 
    }

    .icon img {
        max-width: 45%;
        max-height: 45%;
    }


    .content {
        flex: 0.55;
        display: flex;
        background-color: #e6e6e6;
        color: #545454;
        border-radius: 15px;
        align-items: center;
        justify-content: baseline;
        position: relative;
        z-index: 1; 
        margin-left: -15px; 
        
    }

    .content h1 {
        margin-left: 25px;
    }
</style>
