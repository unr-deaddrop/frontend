<script>
  export let id;
  export let buttonClass = '';
  export let liClass = 'mr-2';
</script>

<li class={liClass} role="presentation">
  <button on:click class={buttonClass} id="{id}-tabhead" type="button" role="tab">
    <slot></slot>
  </button>
</li>