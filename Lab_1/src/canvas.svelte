<script>
  import { onMount, getContext } from "svelte";

  let wrapper;
  let canv = getContext('canvas').canvas;
  let tip_canv = getContext('canvas').tip_canv;
  canv.setAttribute('class', 'canvas');
  onMount(()=>{
    wrapper.appendChild(canv);
    wrapper.appendChild(tip_canv);
  });

</script>

<div bind:this={wrapper} class="canv_wrapper"></div>

<style lang="scss" module>
  @import "./styles/canvas.scss";
</style>