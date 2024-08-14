import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import DatePicker from 'primevue/datepicker'
import ProgressBar from 'primevue/progressbar'

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
  app.component('Tabs', Tabs)
  app.component('TabList', TabList)
  app.component('Tab', Tab)
  app.component('TabPanels', TabPanels)
  app.component('TabPanel', TabPanel)
  app.component('DatePicker', DatePicker)
  app.component('ProgressBar', ProgressBar)
}

export { primeVue, primeVue_options, setupComponents }
