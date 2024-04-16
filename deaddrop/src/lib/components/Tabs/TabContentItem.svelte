<script>
  export let activeTabValue;
  export let id;
  export let contentDivClass = 'p-4 bg-gray-40 rounded-lg dark:bg-gray-300';
</script>

{#if activeTabValue === id}
  <div class="contentDivClass" id="{id}-tabitem" role="tabpanel" aria-labelledby="{id}-tab">
    <slot></slot>
  </div>
{/if}