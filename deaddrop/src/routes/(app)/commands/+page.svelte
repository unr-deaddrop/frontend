<scipt>

</scipt>

<div class = "container">
    <div class = "upper_body"> 
        <div class = "left">
            <h2> Issue Command </h2>
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Standard Options </span>
                </div> 
                <div class = "tab_content">
                    this as a thing
                </div>    
            </div>
        </div>
        <div class = "right">
            <h2 style = "color: #e6e6e6">.</h2>
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Available Commands </span>
                </div> 
                <div class = "tab_content">
                    this as a thing
                </div>    
            </div>
        </div>
    </div>
    <div class = "lower_body">
        <div class = "tab_body"> 
            <div class = "tab_head">
                <span> Protocol Options </span>
            </div> 
            <div class = "tab_content">
                this as a thing
            </div>    
        </div>
        <div class = "tab_body"> 
            <div class = "tab_head">
                <span> Command Reference </span>
            </div> 
            <div class = "tab_content">
                this as a thing
            </div>    
        </div>
    </div>
</div>

<style>
    .container {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 125vh;
    }

    .upper_body {
        flex: .4;
        display:flex;
        flex-direction: row;
    }

    .left{
        flex: .5;
        display:flex;
        flex-direction: column;
    }

    .left h2 {
        margin: 20px;
    }

    .right{
        flex:.5;
        display:flex;
        flex-direction: column;
    }

    .tab_body {
        flex: 1;
        display:flex;
        flex-direction: column;
        margin: 20px;
        border-radius: 10px;
        border-color: 5px solid darkgray;
        background-color: white;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
        
       
        
    }

    .tab_head {
        flex:.15;
        display: flex;
        align-items: center;
        padding: 10px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border: 1px solid darkgrey;
        background-color: #a60707;
        
    }

    .tab_head span {
        color: white;
        font-weight: 300;
    }

    .tab_content{
        padding: 20px;
        flex: 1;
    }
    
    .lower_body {
        flex: .6;
        display: flex;    
        flex-direction: column;
    }
</style>