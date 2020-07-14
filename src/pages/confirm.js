export default class ConfirmPage {
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
            <a class="router" href="/waiting">
                <button type="button" data-id="confirmBtn" class="btn rounded mt-4 mb-2 btn-danger">Confirm</button>
            </a>

            <hr>

            <div class="pictograms">
              <p>You can specify your needs</p>

              <p>//ACCIDENT_TYPES//</p>

            </div>
        </div>
    `;

    this.element = element.firstElementChild;
  }
}
