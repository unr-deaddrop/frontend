<script>
    import { TypedJs } from '$lib'
    let headerlog = ["Welcome to DeadDrop!"];
    var jokes= ['Guess the number of programmers it takes to change a light bulb? Zero its a hardware problem','There are only 10 kinds of people in this world: those who know binary and those who don’t.','Real programmers count from 0.', 'Why did the programmer quit his job? Because he didnt get arrays.', 'A foo walks into a bar takes a look around and says Hello World','0 is false 1 is true right? 1','Things arent always #000000 and #FFFFFF.','What is the most used language in programming? Profanity','!False its funny because its True','You had me at Hello World','2b||!2b','Yesterday I changed the name on my wifi to Hack if you can. Today I found it named Challenge Accepted','A programmer is a person who fixed a problem that you didnt know you had in a way you dont understand','How can you tell if a computer geek is an extrovert? They stare at your shoes when you talk instead of their own.','I would love to change the world but they wont give me the source code.','If at first you dont succedd call it version 1.0','Computers make very fast very accurate mistakes','I farted in the Apple store and everyone got mad at me. Not my fault they dont have Windows.','Knock Knock... Whos there? Art... Art Who? R2D2','Hilarious and amazingly true thing: if a pizza has a radius (z) and a depth (a) that pizzas volume can be defined Pi*z*z*a.']
    
</script>

<div class="header">
        <div class="left_bar">
            <span> 
                DeadDrop v7af5c8e
            </span>
        </div>
        <div class = "center">
            <span style="margin-left: 20px;"> 
                {#each headerlog as header}
                    <TypedJs string = {header}/>
                {/each}
            </span>
        </div>
        <div style="flex: .33"></div>
    </div>

<style>
    :global(body, div) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
    }

    .left_bar{
        background-color: #282b30;
        color: white;
        justify-content: center;
        align-items: center;
        display: flex;
        flex: .33;
        flex-direction: column;
    }

    .center{
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .header {
        display:flex;   
        flex: .1;  
        box-shadow: 0 1px 1px 1px #1e2124;
        z-index: 3;
    }


</style>

