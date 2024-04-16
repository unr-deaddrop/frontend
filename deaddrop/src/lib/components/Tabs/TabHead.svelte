<script>
  export let divClass = '';
  export let ulClass = 'flex flex-wrap -mb-px';
</script>

<div class="divClass">
  <ul class="ulClass" role="tablist">
    <slot></slot>
  </ul>
</div>