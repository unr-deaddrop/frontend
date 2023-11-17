<script>
    // text box
    // this is the binput box where you put stuff into the form etc
    // export let innerText;
    export let label;
    export let inputStuffChild;
</script>
<div class="form__group field">
    <input type="input" class="form__field" placeholder="Name" name="name" id='name' bind:value={inputStuffChild}/>
    <label for="name" class="form__label">{label}</label>
</div>
<!-- <input type="button" value="test"/>
<input type="color" name="1" id="1">
<input type="date" name="" id="">
<input type="datetime-local" name="" id="">
<input type="email" name="" id="">
<input type="file" name="" id="">
<input type="hidden" name="test">
<input type="image" src="" alt="">
<input type="week" name="1" id="">
<input type="url" name="1" id="">
<input type="time" name="1" id="">
<input type="text" name="1" id="">
<input type="tel" name="1" id="">
<input type="submit" value="1">
<input type="search" name="12" id="">
<input type="month" name="" id="">
<input type="number" name="" id="">
<input type="password" name="a" id="">
<input type="radio" name="" id="">
<input type="reset" value="12341234"> -->


<style lang="scss">
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #a60707;
  outline: 0;
  font-size: 1.3rem;
  color: #222;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #a60707;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #a60707;
    font-weight:700;    
  }
  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #a60707,#222);
  border-image-slice: 1;
}
/* reset input */
.form__field{
  &:required,&:invalid { box-shadow:none; }
}
</style>