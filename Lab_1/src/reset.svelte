<script>
import { table } from "./store.js";
async function reset_data(){
  const API_URL = "./backend/reset_session.php";
  const response = await fetch(API_URL);
  console.log(await response);
  table.set([]);
  drow_dots(table);
}
</script>

<button on:click={ () => reset_data() }>
  <p>Сбросить</p>
</button>

<style lang="scss">
  @import "./styles/button.scss";
</style>