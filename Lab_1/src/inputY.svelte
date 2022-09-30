<script>
  let tip = false;
  let count_dot = 0;
  $: x = 0;
  let previous = 0;
  function checking( e ){ 
    console.log( e );
    console.log( typeof(x) );
    if ( e.key == "." && !String(previous).includes('.') ) {
      count_dot++;
      return;
    }
    if ( e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode == 8 || (e.keyCode == 189 && previous === '') ) x = e.target.value;
    else x = Number(previous);
    if ( e.keyCode == 38 ) x = ( Number( x ) + 1 ).toFixed(4);
    if ( e.keyCode == 40 ) x = ( Number( x ) - 1 ).toFixed(4);
    if ( +x > 5.0 ) x = 5;
    if ( +x < -3.0 ) x = -3;
    if ( x === '' ) tip = true;
    else {
      tip = false;
      if ( (Number(x) * 10000) - Math.trunc(Number(x) * 10000) > 0 ){
        x = Number( x ).toFixed(4);
      }
    }
    previous = x;
  }
</script>
<div class="cont">
  Введите Y:
<input type="text" 
       bind:value = {x} 
       min="-3" 
       max="5" 
       on:keyup={ (e) => { checking(e)} }
       />
{#if tip}
<p>Вы ничего не ввели!</p>
{/if}
</div>

<style lang="scss">
  @import "./styles/inputY.scss";
</style>