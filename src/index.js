// Dependencies
import Fragment from 'vue-fragment'

// Import vue components
import CrudTable from '@/components/CrudTable.vue'
import CrudFragment from '@/components/CrudFragment.vue'
import CrudFormMixin from '@/mixins/CrudForm.js'

// Declare install function executed by Vue.use()
export function install (Vue) {
  if (install.installed) return
  install.installed = true

  // Register plugin dependencies
  Vue.use(Fragment.Plugin)

  // Components
  Vue.component('vec-table', CrudTable)
  Vue.component('vec-fragment', CrudFragment)

  // Mixins
  Vue.mixin(CrudFormMixin)
}

// Create module definition for Vue.use()
const plugin = { install }

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// To allow use as module (npm/webpack/etc.) export component
export default { plugin, 'vec-table': CrudTable, 'vec-fragment': CrudFragment, 'vec-form-mixin': CrudFormMixin }
