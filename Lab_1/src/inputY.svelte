<script>
  import { y } from "./store.js";
  let tip = false;
  let count_dot = 0;
  $: $y = 0;
  let previous = 0;
  function checking( e ){ 
    if ( e.key == "." && !String(previous).includes('.') ) {
      count_dot++;
      return;
    }
    if ( e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode == 8 || (e.keyCode == 189 && previous === '') ) $y = e.target.value;
    else $y = Number(previous);
    if ( e.keyCode == 38 ) $y = ( Number( $y ) + 1 ).toFixed(4);
    if ( e.keyCode == 40 ) $y = ( Number( $y ) - 1 ).toFixed(4);
    if ( +$y > 5.0 ) $y = 5;
    if ( +$y < -3.0 ) $y = -3;
    if ( $y === '' ) tip = true;
    else {
      tip = false;
      if ( (Number($y) * 10000) - Math.trunc(Number($y) * 10000) > 0 ){
        $y = Number( $y ).toFixed(4);
      }
    }
    previous = $y;
  }
</script>
<div class="cont_y">
  <p>Введите Y:</p>
<input type="text" 
       bind:value = {$y} 
       min="-3" 
       max="5" 
       on:keyup={ (e) => { checking(e)} }
       />
{#if tip}
<div class="error">
  <p>Вы ничего не ввели!</p>
</div>
{/if}
</div>

<style lang="scss">
  @import "./styles/inputY.scss";
</style>