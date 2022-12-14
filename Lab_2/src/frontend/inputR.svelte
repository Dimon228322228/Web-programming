<script>
  import { getContext } from "svelte";

  let input_model = getContext('input_model');
  let canvas_controller = getContext('canvas').canvas_controller;

  $: tip = false;
  $: values = [{ v: 1, check: false},
               { v: 2, check: false},
               { v: 3, check: false},
               { v: 4, check: false},
               { v: 5, check: true}];

  function update( x ){
    values.forEach( item => { item.check = x == item.v ? true : false } );
    let count = 0;
    values.forEach( item => { count = item.check ? count + 1 : count} );
    if (!count) tip = true;
    else {
      tip = false;
      input_model.r = Number(x);
      let update_canvas = canvas_controller.update_scale.bind(canvas_controller);
      update_canvas();
    }
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
              on:change={ e => update(e.target.name) }>  
    </div> 
  {/each}
  </div>
  {#if tip}
  <p class="tip">Вы ничего не выбрали!</p>
  {/if}
</div>

<style lang="scss">
  @import "./styles/inputR.scss";
</style>