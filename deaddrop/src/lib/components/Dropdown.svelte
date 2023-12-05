<script>
    let menuOpen = false;
    export let radius_side = 0
    export let title = "";
   
    function toggleMenu() {
      menuOpen = !menuOpen;
    }

    function radius(){
        if (radius_side == 0){
            return "dropbtn"
        }

        else if (radius_side == 1){
            return "dropbtn_trad"
        }

        else if (radius_side == 2){
            return "dropbtn_brad"
        }

        else {
            return "dropbtn"
        }
    }
</script>
  
<div class="container">
    <button on:click={toggleMenu} class="{radius()}">{title}</button>
    <div class={`dropdown-content ${menuOpen ? 'visible' : ''}`}>
        <a href="/example" class="dropdown-item">Nullam id dolor id nibh ultricies vehicula ut id elit. 
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
        </a>
    </div>
</div>

<style>
    .container {
      position: relative;
    }
  
    .dropbtn {
      background-color: white;
      color: #4d4d4d;
      border: 1px solid #4d4d4d;
      padding: 16px;
      font-size: 16px;
      cursor: pointer;
      width: 100%;
    }

    .dropbtn_trad {
      background-color: white;
      color: #4d4d4d;
      border: 1px solid #4d4d4d;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      padding: 16px;
      font-size: 16px;
      cursor: pointer;
      width: 100%;
    }
  
    .dropbtn_brad {
      background-color: white;
      color: #4d4d4d;
      border: 1px solid #4d4d4d;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      padding: 16px;
      font-size: 16px;
      cursor: pointer;
      width: 100%;
    }

    .dropdown-content {
      position: absolute;
      width: 100%;
      top: 100%;
      left: 0;
      background-color: white;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      border: 1px solid #ccc;
      border-radius: 5px;
      z-index: 1;
      margin-top: 5px;
  
      /* Use conditional class to control visibility */
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease-in-out;
    }
  
    .dropdown-content.visible {
      opacity: 1;
      pointer-events: auto;
    }
  
    .dropdown-item {
      padding: 12px;
      display: block;
      text-decoration: none;
      color: #333;
    }
</style>
  