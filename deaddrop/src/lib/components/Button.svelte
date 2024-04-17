<script>
    // generic button
    // this is the button that can edit, add and perform other actions
    let buttonProps = {
	    class: [$$restProps.class]
	}
    
    export let href = undefined;
    export let type = 'submit';
</script>
<a href={href}>
    <button 
        on:click 
        {...buttonProps}
    >
        <slot></slot>
    </button>
</a>

<style>
    button{
        background-color: #a60707;
        color: #fff;
        border: 0;
        cursor: pointer;
        border-radius: 10px;
        padding: 8px 12px;
        font-weight: bold;
    }
    .primary{
        background-color: #a60707;
    }
    
  .text-sm{
    font-size: 0.875rem;
    line-height: 1.25rem; 
  }
  .text-lg{
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  .liClassing{
    margin-bottom: 1rem;
    padding: 0;
  }
  .mr-2{
    margin-right: 0.5rem; 
  }
  .inline-block{
    display: inline-block; 
  }
  .py-4{
    padding-top: 1rem;
    padding-bottom: 1rem; 
  }
  .px-4{
    padding-left: 1rem;
    padding-right: 1rem; 
  }
  .text-sm{
    font-size: 0.875rem;
    line-height: 1.25rem; 
  }
  .text-lg{
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  .font-medium{
    font-weight: 500; 
  } 
  .text-center{
    text-align: center; 
  } 
  .active-bg{
    background-color: #7b0606; 
  }
</style>