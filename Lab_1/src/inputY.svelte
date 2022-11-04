<script>
  import { onMount } from "svelte";
  import { y } from "./store.js";
  let tip = false;
  $: $y = 0;
  let previous = 0;
  let input;

  onMount(() => {
    input.setAttribute('title', '!! -3 < y < 5 !! To enter float number use a dot.')
  });

  function isInRange(value, min, max){
    return isNumber(value) && (value > min && value < max);
  }
  function isNumber( value ){
    return !Number.isNaN(value);
  }

  function checking(){ 
    if ( !isInRange( $y, -3, 5 ) ){
      $y = previous;
      return;
    }
    if ( $y === '' ) {
      tip = true;
    } else {
      tip = false;
      previous = Number($y);
      return;
    }
  }
</script>
<div class="cont_y">
  <p>Введите Y:</p>
  <input bind:this={input} type="text" bind:value = {$y} on:input={ (e) => { checking(e)} } />
  {#if tip}
    <div class="error">
      <p>Вы ничего не ввели!</p>
    </div>
  {/if}
</div>

<style lang="scss">
  @import "./styles/inputY.scss";
</style>