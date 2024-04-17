<script>
  export let activeTabValue;
  export let id;
  export let contentDivClass = 'p-4 bg rounded-lg';
</script>

{#if activeTabValue === id}
  <div class={contentDivClass} id="{id}-tabitem" role="tabpanel" aria-labelledby="{id}-tab">
    <slot></slot>
  </div>
{/if}

<style>
  .p-4{
    padding: 0rem;
  }
  .bg{
    background-color: inherit;
  }
  .rounded-lg{
    border-radius: 0.5rem;
  }
</style>