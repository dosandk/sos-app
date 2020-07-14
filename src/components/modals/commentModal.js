export default class CommentModal {
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
        <div class="modal showed" id="commentModal" tabindex="-1" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title">What do you need?</h5>
                      <button type="button" data-id="closeModalBtn" class="close" data-dismiss="modal">
                        <span>&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <input class="form-control">
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-danger">Save</button>
                  </div>
              </div>
          </div>
      </div>
    `

    this.element = element;

  }

  getSubElements() {
    const obj = {};

    const elements = this.element.querySelectorAll('[data-id');

    for (const element of elements) {
      obj[element.dataset.id] = element;
    }

    this.subElements = obj;

  }

  initEventListeners() {
    const {closeModalBtn} = this.subElements;

    closeModalBtn.addEventListener('click', () => {

      // CLOSE MODAL
      // TESTING SOLUTION BELOW
      closeModal();
    });
  }
}
