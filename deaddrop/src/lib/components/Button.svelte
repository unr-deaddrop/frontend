<script>
    // generic button
    // this is the button that can edit, add and perform other actions
    export let type = 'primary'; // type of button i.e. primary or secondary. a class to the button
    export let flat = false;
</script>

<button class={type}>
    <slot>
    </slot>
</button>

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
</style>