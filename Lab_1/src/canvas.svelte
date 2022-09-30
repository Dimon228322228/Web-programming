<script>
  import { onMount } from "svelte";
  import { drawing } from "./canvas";
  let canvas;
  onMount(() => {
    drawing(canvas);
  });
  function culc( e ) {
      let rect = canvas.getBoundingClientRect();
      let x_0 = rect.left + (rect.right - rect.left) / 2;
      let y_0 = rect.top + (rect.bottom - rect.top) / 2;
      let current_x = e.clientX - x_0;// this is relative by center canvas coordinate
      let current_y = y_0 - e.clientY; // this is relative by center canvas coordinate
  }
</script>

<canvas width="400" height="400" bind:this={ canvas }
        on:mousemove={ (e) => { culc(e) } }></canvas>

<style lang="scss">
  @import "./styles/canvas.scss";
</style>