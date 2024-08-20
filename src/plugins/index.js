import { primeVue, primeVue_options, setupComponents } from '@/plugins/primeVue.js'
import emitter from '@/plugins/mit'
import { registerChartComponents } from '@/plugins/vueChart'

export function initPlugins(app) {
  app.use(primeVue, primeVue_options)
  app.config.globalProperties.emitter = emitter
  setupComponents(app)
  registerChartComponents()
}
