import { fogIsActivated, zIndex } from '@/state/store'

function enableFog(ordering = 103) {
  fogIsActivated.value = true
  zIndex.value = ordering
}

function disableFog() {
  fogIsActivated.value = false
}

export { enableFog, disableFog }
