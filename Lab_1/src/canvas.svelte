<script>
  import { onMount, getContext } from "svelte";

  let wrapper;
  let canv = getContext('canvas').canvas;
  onMount(()=>{
    wrapper.appendChild(canv)
  });
  
  
  // function culc() {
  //     let rect = canvas.getBoundingClientRect();
  //     x_0 = rect.left + (rect.right - rect.left) / 2;
  //     y_0 = rect.top + (rect.bottom - rect.top) / 2;
  // }
  // function get_current_coordinate(e){
  //   current_x = e.clientX - x_0;// this is relative by center canvas coordinate
  //   current_y = y_0 - e.clientY; // this is relative by center canvas coordinate
  // }
</script>

<div bind:this={wrapper} class="canv_wrapper"></div>

<style lang="scss">
  @import "./styles/canvas.scss";
</style>