<!-- Header.svelte -->
<script>
</script>

<div>
  <h1><slot/></h1>
</div>

<style>
  :global(body, header) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  div {
    background-color: #e6e6e6;
    color: #545454;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px;
  }

  h1 {
    flex: 1;
    text-align: center; /* Center the text horizontally */
    margin: 10px;
    padding: 10px;
  }
</style>
