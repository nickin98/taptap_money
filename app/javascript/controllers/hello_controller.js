import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    let a = 1;
    this.element.textContent = "Hello World!"
  }
}
