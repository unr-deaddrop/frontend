<script>
    export let href = ""
    export let button_color = ""
    export let text = 'placeholder'

    let isHovered = false;
  
    function handleMouseOver() {
      isHovered = true;
    }
  
    function handleMouseOut() {
      isHovered = false;
    }
  
    // Additional focus-related events
    function handleFocus() {
      isHovered = true;
    }
  
    function handleBlur() {
      isHovered = false;
    }

    function darkenColor(color, percent) {
      // Function to darken a color by a percentage
      // Assuming color is in the format "#RRGGBB"
      color = color.slice(1); // remove the '#' symbol
      let num = parseInt(color, 16);
      let amt = Math.round(2.55 * percent);
      let R = (num >> 16) - amt;
      let G = (num >> 8 & 0x00FF) - amt;
      let B = (num & 0x0000FF) - amt;
      R = Math.max(0, R); // Ensure the value is not below 0
      G = Math.max(0, G);
      B = Math.max(0, B);
      return `#${(1 << 24 | R << 16 | G << 8 | B).toString(16).slice(1)}`;
    }

  </script>
  
  <a
    href = {href}
    on:mouseover={handleMouseOver}
    on:mouseout={handleMouseOut}
    on:focus={handleFocus}
    on:blur={handleBlur}
    style={`background-color: ${isHovered ? darkenColor(button_color, 20) : button_color}`}
  >
 
   {text}
   
  </a>
  
  <style>
    a {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      border-color: black 5px;
      padding: 10px 20px;
      font-size: 16px;
      text-decoration: none;
      color: white;
      overflow: hidden;
      transition: background-color 0.3s ease-in-out;
    }

    
  </style>
  
  
