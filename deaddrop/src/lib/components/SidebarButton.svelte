<script>
  export let href = "#";
  export let text = 'placeholder';
  export let src = "your-image.jpg";
  export let alt = "Your Image";

  let isHovered = false;

  function handleMouseOver() {
    isHovered = true;
  }

  function handleMouseOut() {
    isHovered = false;
  }

  
  function handleFocus() {
    isHovered = true;
  }

  function handleBlur() {
    isHovered = false;
  }

</script>

<a
  href={href}
  class="button"
  on:mouseover={handleMouseOver}
  on:mouseout={handleMouseOut}
  on:focus={handleFocus}
  on:blur={handleBlur}
  style={`opacity: ${isHovered ? 1 : 0.5}`} 
>
  <img src={src} alt={alt}>
  <span style = "margin-left: 5px;">{text}</span>
</a>

<style>
  .button {
    width: 100%;
    display: flex; 
    align-items: center; 
    padding: 10px 20px;
    font-size: 16px;
    text-decoration: none;
    color: white;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out; 
  }

  .button span {
    flex: 1; 
  }

  .button img {
    max-width: 10%;
    height: auto;
  }

  .button:hover,
  .button:focus {
    opacity: 1; 
  }
</style>

