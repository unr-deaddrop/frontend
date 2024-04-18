<script>
	import Button from "$lib/components/Button.svelte"
  export let id;
  export let activeTabValue;
  let isActive = true;
  export let buttonClass = '';
  export let inactiveClass = '' + buttonClass

  export let activeClass = 'active-bg' + buttonClass
  const liClass = 'mr-2 liClassing'

</script>

<div class={liClass} role="presentation">
  <!-- <Button on:click class={activeTabValue === id ? activeClass : inactiveClass} id="{id}-tabhead" type="button" role="tab"> -->
  <Button on:click id="{id}-tabhead" type="button" role="tab">
    <slot></slot>
  </Button>
</div>

<style lang="scss">
  .liClassing{
    margin-bottom: 1rem;
    padding: 0;
  }
  .mr-2{
    margin-right: 0.5rem; 
  }

</style>