<script>
  import { getContext } from "svelte";
  import { Vector } from "./util/vector.js";
  let input_model = getContext('input_model');
  let canvas_controller = getContext('canvas').canvas_controller;
  let callback = canvas_controller.redraw_canvas.bind(canvas_controller);

  function getData(){
    input_model.requestData( new Vector( input_model.x, input_model.y ), callback );
  }

</script>
<button on:click={ () => { getData(); } }>
  <p>Отправить</p>
</button>

<style lang="scss">
  @import "./styles/button.scss";
</style>