export default class ConfirmPage {
  element;

  constructor () {
    console.error('ConfirmPage');

    this.render();
  }

  render () {
    const element = document.createElement('div');

    element.innerHTML = `
        <div>
            <h1>Hello ConfirmPage</h1>
        </div>
    `;

    this.element = element.firstElementChild;
  }
}
