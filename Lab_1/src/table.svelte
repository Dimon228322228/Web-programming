<script>
  import { table } from "./store.js";
</script>

<table>
  <thead>
    <th>Запрос №</th>
    <th>X</th>
    <th>Y</th>
    <th>Z</th>
    <th>Результат</th>
    <th>Время запроса</th>
    <th>Время выполнения</th>
  </thead>
  <tbody>
  {#each $table as item}
    <tr>  
      <td>1</td>
      <td>{item['x']}</td>
      <td>{item['y']}</td>
      <td>{item['z']}</td>
      <td>{item['inShape']}</td>
      <td>{item['current_time']}</td>
      <td>{item['exeution_time']}</td>
    </tr>
  {/each}
  </tbody>
</table>

<style lang="scss">
  @import "./styles/table.scss";
</style>