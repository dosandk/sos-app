export default class RateModal {
  element;
  subElements;

  constructor() {
    this.render();
    this.getSubElements();
    this.initEventListeners();
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = `
        <div class="modal showed" id="rateModal" tabindex="-1" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Rate</h5>
                <button type="button" data-id="closeModalBtn" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div class="modal-body">

                <img src="https://via.placeholder.com/150" alt="avatar" class="rounded-circle img-thumbnail">
                <p class="mt-1 mb-3">2.31/5</p>
                <p class="mt-1 mb-1 font-weight-bold">Adrian Szymanski</p>
                <p class="mt-1 mb-3 font-weight-bold">+380 (99) 114 36 74</p>

                <hr>

                <p class="question mb-2">Rate</p>
                <p>STARS</p>

                <button type="button" data-id="confirmRateBtn" class="btn btn-success">Confirm</button>

              </div>
            </div>
          </div>
        </div>
    `

    this.element = element;

  }

  getSubElements () {
    const obj = {};

    const elements = this.element.querySelectorAll('[data-id');

    for (const element of elements) {
      obj[element.dataset.id] = element;
    }

    this.subElements = obj;

  }

  initEventListeners () {
    const { closeModalBtn } = this.subElements;

    closeModalBtn.addEventListener('click', () => {

      // CLOSE MODAL
      // TESTING SOLUTION BELOW
      closeModal();
    });
  }
}
