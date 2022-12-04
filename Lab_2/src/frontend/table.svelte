<script>
  import { table, count } from "./store.js";
  function getCount(){
    count.update(n => n + 1);
    return $count;
  }
</script>
<div class="table_wrap">
  <table>
    <thead>
      <th>Запрос №</th>
      <th>X</th>
      <th>Y</th>
      <th>R</th>
      <th>Результат</th>
      <th>Время запроса</th>
      <th>Время выполнения</th>
    </thead>
    <tbody>
      {#each $table as item}
        <tr>  
          <td>{getCount()}</td>
          <td>{item.x}</td>
          <td>{item.y}</td>
          <td>{item.r}</td>
          <td>{item.isHit}</td>
          <td>{item.current_time}</td>
          <td>{item.execution_time}</td>
        </tr>
    {/each}
    </tbody>
  </table>
</div>

<style lang="scss">
  @import "./styles/table.scss";
</style>