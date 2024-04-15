<script>
    export let selectedOption = 10;

    function handleChange(event) {
      selectedOption = event.target.value;
    }
</script>
<svelte:options accessors={true}/>

  
  <select id="dropdown" bind:value={selectedOption} on:change={handleChange}>
    <option value="1">1</option>
    <option value="10">10</option>
    <option value="25">25</option>
    <option value="100">100</option>
  </select>
  
  <style>
    select {
      border-radius: 5px;
      border-color: #4d4d4d;
    }
  </style>
  
  
  
