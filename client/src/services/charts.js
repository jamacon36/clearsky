import Api from '@/services/api'

export default {
  fetchCharts () {
    return Api().get('charts')
  }
}
