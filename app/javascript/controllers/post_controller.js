import { Controller } from "stimulus"

export default class extends Controller {
//   static targets = ["output"]

  connect() {
    console.log("Stimulus is on!")
  }

  closeModal() {
    console.log("closeModal invoked.")
  }

  passDataToModal() {
    
  }
}
