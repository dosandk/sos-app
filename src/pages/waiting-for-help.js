export default class WaitingForHelpPage {
  element;

  constructor() {
    this.render();
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = `
      <div>
        <h1>Waiting for help</h1>
      </div>
    `

    this.element = element;
  }




}
