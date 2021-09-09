import { Controller } from "stimulus"

export default class extends Controller {
//   static targets = ["output"]

  connect() {
    this.element.textContent = "Hello Stimulus!"
  }

  passDataToModal() {
    
  }
}
