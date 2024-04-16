<script>
  import { uid, onClickOutside } from "./Context.svelte";

  export let disabled = undefined;
  export let error = undefined;
  export let id = uid();
  export let label = "";
  export let name;
  export let placeholder = undefined;
  export let readonly = undefined;
  export let required = undefined;
  export let value;

  let inputElement;
</script>

<div class="combobox">
  <label class="combobox__label label" for={id}>
    {label}
    {#if error}
      <span class="form-validation-error">
        {error}
      </span>
    {/if}
  </label>

  <div class="input-container">
    <slot name="icon-start" />

    <input
      bind:this={inputElement}
      on:focus
      on:blur
      on:input
      class="combobox__input"
      {id}
      {name}
      type="text"
      {disabled}
      autocapitalize="none"
      autocomplete="off"
      {readonly}
      {placeholder}
      spellcheck="false"
			role="combobox"
			aria-autocomplete="list"
      aria-required={required ? "true" : undefined}
    />
  </div>
</div>

<style>
	.combobox {
		--accent-color: #06113C;
		--background-color: white;
		--border-radius: 1em;
		
		--option-border: ;
		--option-padding: ;
		
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}
	
  .input-container {
    position: relative;
  }
	
	.combobox__input {
		margin: 0;
		width: 100%;
		padding: 0.8rem 1rem;
		border: 1px solid gray;
		border-radius: 4px;
	}
	
	.combobox__input:focus {
		outline: none;
	}
	
	.combobox:focus-within .combobox__input {
		border-color: var(--accent-color);
	}
</style>
