export default class WaitingForHelpPage {
  element;

  constructor() {
    this.render();
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = `
      <div>
        <a onclick="goBack()" class="fixed-btn">&#8249;</a>
        <h1>MAP</h1>

        <hr>

        <p>00:20</p>
        <h3 class="font-weight-bold">Help in: 09:18</h3>

        <hr>

        <p>//List of helpers//</p>
      </div>
    `

    this.element = element.firstElementChild;
  }

}
