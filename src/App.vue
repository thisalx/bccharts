<template>
  <div id="app">
    <Chart title="Рыночная цена" type="market-price" class="chart-card" />
    <Chart title="Сложность сети" type="difficulty" class="chart-card" />
    <Chart
      title="Стоимость транзакции"
      type="cost-per-transaction"
      class="chart-card"
    />
  </div>
</template>

<script>
import Chart from "@/components/Chart";

export default {
  name: "App",
  components: {
    Chart,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.chart-card + .chart-card {
  margin-top: 50px;
}
</style>
