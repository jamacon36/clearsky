<template>
  <div class="charts">
    <h1>Charts</h1>
    <h2>Charts to Choose From</h2>
    <ul>
      <li v-for="(chart, index) in charts" v-bind:key="index">
        {{ chart.title }} - <a :href="chart.chartUrl" rel="noOpener" target="_blank">Link</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Charts from '@/services/charts'
export default {
  name: 'charts',
  data () {
    return {
      charts: []
    }
  },
  mounted () {
    this.getCharts()
  },
  methods: {
    async getCharts () {
      const response = await Charts.fetchCharts()
      this.charts = response.data.chartList
    }
  }
}
</script>
