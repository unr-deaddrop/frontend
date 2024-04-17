<script>
  export let divClass = 'w-full'
</script>

<div class={divClass}>
  <slot/>
</div>

<style>
  .w-full{
    width: 100%; 
  }
</style>