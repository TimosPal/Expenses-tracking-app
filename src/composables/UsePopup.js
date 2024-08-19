import { popup, fogIsActivated } from '@/state/store'

function disablePopup() {
  popup.componentIsActive.value = false
  fogIsActivated.value = false
}

export { disablePopup }
