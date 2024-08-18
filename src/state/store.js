import { ref } from 'vue'

// Toggle state.
const isActive = ref(true)
const toggleClass = ref('')
const popUpComponent = ref(null)

export { isActive, toggleClass, popUpComponent }
