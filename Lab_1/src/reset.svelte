<script>
import { table } from "./store.js";
function reset(){
  table.set([]);
}
</script>

<button on:click={ () => reset() }>
  <p>Сбросить</p>
</button>

<style lang="scss">
  @import "./styles/button.scss";
</style>