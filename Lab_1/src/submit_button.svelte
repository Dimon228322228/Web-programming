<script>
  import { table } from "./store.js";
  import { r } from "./store.js";
  import { x } from "./store.js";
  import { y } from "./store.js";

  const apiURL = "./backend/index.php";
  async function getData(){
    const response = await fetch(apiURL+ "?" + new URLSearchParams({
      x: $x,
      y: $y,
      r: $r
    }));
    const data = (await response.json());
    console.log( data );
    table.set(data);
  }
</script>
<button on:click={ () => { getData(); } }>
  <p>Отправить</p>
</button>

<style lang="scss">
  @import "./styles/button.scss";
</style>