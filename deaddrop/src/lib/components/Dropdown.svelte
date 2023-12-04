<script>
    let menuOpen = false;
    export let topradius = false;
    export let title = "";
    function toggleMenu() {
      menuOpen = !menuOpen;
    }
  </script>
  
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

    .dropbtn_rad {
      background-color: white;
      color: #4d4d4d;
      border: 1px solid #4d4d4d;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
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
  
  <div class="container">
    <button on:click={toggleMenu} class="{topradius? `dropbtn_rad` : `dropbtn`}">{title}</button>
    <div class={`dropdown-content ${menuOpen ? 'visible' : ''}`}>
        <a href="/" class="dropdown-item">Nullam id dolor id nibh ultricies vehicula ut id elit. 
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
        </a>
    </div>
  </div>
  