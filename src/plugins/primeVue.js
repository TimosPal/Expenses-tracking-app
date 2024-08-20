import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

import 'primeicons/primeicons.css'

const primeVue_options = {
  theme: {
    preset: Aura
  },
  unstyled: false
}

const primeVue = PrimeVue

function setupComponents(app) {
  // Some components are not properly auto-registered
  // therefore we have to register them manually.

  app.component('DataTable', DataTable)
  app.component('Column', Column)
}

export { primeVue, primeVue_options, setupComponents }
