<script>
  let array = [-3, -2, -1, 0, 1, 2, 3, 4, 5];
  let x = 0;
</script>
<div class="cont">
  Выберите X:
  <div class="inputs">
    {#each array as item}
      <div>
        <label for={ item }>{ item }</label>
        <input type="radio" bind:group={x} value={ item }/>
      </div>
    {/each}
  </div>
</div>
<style lang="scss">
  @import "./styles/inputX.scss";
</style>