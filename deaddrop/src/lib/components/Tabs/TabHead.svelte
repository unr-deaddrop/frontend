<script>
  export let divClass = '';
  export let ulClass = 'flex flex-wrap -mb-px';
</script>

<div class={divClass}>
  <div class={ulClass} role="tablist">
    <slot></slot>
  </div>
</div>

<style>
  .flex{
    display: flex;
  }
  .flex-wrap{
    flex-wrap: wrap;
  }
  .-mb-px{
    margin-bottom: -1px;
  }
</style>