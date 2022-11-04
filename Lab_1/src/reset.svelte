<script>
  import { getContext } from 'svelte';
  let input_model = getContext('input_model');
  let canvas_controller = getContext('canvas').canvas_controller;
  function reset(){
    input_model.resetData();
    canvas_controller.redraw_canvas( input_model.table );
  }
</script>

<button on:click={ () => reset() } >
  <p>Сбросить</p>
</button>

<style lang="scss">
  @import "./styles/button.scss";
</style>