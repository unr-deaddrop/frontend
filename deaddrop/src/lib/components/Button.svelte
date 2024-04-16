<script>
    // generic button
    // this is the button that can edit, add and perform other actions
    export let classes = 'primary'; // type of button i.e. primary or secondary. a class to the button. used for css
    export let href = '';
</script>
<a href={href}>
    <button class={classes}>
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
</style>