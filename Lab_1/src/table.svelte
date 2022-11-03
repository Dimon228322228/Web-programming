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
     {@html $table}
    </tbody>
  </table>
</div>

<style lang="scss">
  @import "./styles/table.scss";
</style>