import { popup } from '@/state/store'
import { enableFog, disableFog } from '@/composables/UseFog'

function enablePopup(comp) {
  enableFog(103)
  popup.isActive.value = true
  popup.componentIsActive.value = true
  popup.component = comp
}

function disablePopupComponent() {
  // Use this when wanting to turn off a popup.
  popup.componentIsActive.value = false
  disableFog()
}

function disablePopup() {
  // Should only be called as animation-end callback!!!
  // Disable parent component after animaiton is finished
  // to ensure transition element is still present.
  popup.isActive.value = false
  popup.component = null
}

export { enablePopup, disablePopupComponent, disablePopup }
