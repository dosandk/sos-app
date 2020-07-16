export default class LoginPage {
  element;
  subElements = {};

  constructor() {

    this.render();
    this.getSubElements();
    this.initEventListeners();
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = `
      <div>
        <h1>Login Page</h1>
        <a class="router" href="/profile">
          <div data-id="navigationBtn">Go to next page</div>
        </a>
      </div>
    `;

    this.element = element.firstElementChild;
  }

  getSubElements () {
    const elements = this.element.querySelectorAll('[data-id]');

    for (const element of elements) {
      this.subElements[element.dataset.id] = element;
    }
  }

  initEventListeners () {

  }
}
