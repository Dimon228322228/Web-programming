<script>
  import { r } from "./store.js";

  $: tip = false;
  $: values = [{ v: 1, check: true},
               { v: 2, check: false},
               { v: 3, check: false},
               { v: 4, check: false},
               { v: 5, check: false}];
  export const getR = function getR(){
    values.forEach(element => {
      if (element.check){
        return element.v;
      }
    }); 
  }

  function update( x ){
    console.log(x);
    values.forEach((item) => {
      if (x != item.v){
        item.check = false;
      } 
    });
    let count = 0;
    values.forEach((item) => {
      if ( item.check ) count++;
    });
    if (!count) tip = true;
    else tip = false;
    values = [...values];
  }
</script>
<div class="cont_r">
  <p>Выберите радиус:</p>
  <div class="inputs">
    {#each values as item}
    <div>
      <label for={ item.v }> { item.v } 
      </label>    
      <input type=checkbox name={ item.v }
              bind:checked={item.check}
              bind:value={$r}
              on:change={ e => update(e.target.name) }>
              
    </div> 
  {/each}
  </div>
  {#if tip}
  <p class="tip">Вы ничего не выбрали!</p>
  {/if}
</div>

<style lang="scss" global>
  @import "./styles/inputR.scss";
</style>