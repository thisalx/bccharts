<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>
        {{ title }}
      </b-card-title>
    </b-card-header>
    <ApexChart
      ref="chart"
      width="100%"
      height="350"
      type="area"
      :options="options"
      :series="series"
    ></ApexChart>
  </b-card>
</template>

<script>
import api from "@/config/app";
import axios from "axios";

export default {
  name: "Chart",
  props: {
    title: String,
    type: String,
  },
  data() {
    return {
      options: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        labels: [],
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          opposite: true,
        },
        legend: {
          horizontalAlign: "left",
        },
        noData: {
          text: "Loading...",
        },
      },
      series: [],
    };
  },
  async mounted() {
    await axios
      .get(`${api.bcApi}/charts/${this.type}?format=json&cors=true`)
      .then((response) => {
        response.data.values.map((item) => this.options.labels.push(item.x));
        this.$refs.chart.updateSeries([
          {
            name: "value",
            data: response.data.values,
          },
        ]);
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style scoped></style>
