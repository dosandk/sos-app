export default class DeleteHelperModal {
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
        <div class="modal fade show" id="deleteHelperModal" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalLiveLabel" style="display: block; " aria-modal="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLiveLabel">Are you sure?</h5>
                        <button type="button" data-id="closeModalBtn" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <button type="button" class="btn btn-success">Yes</button>
                        <button type="button" class="btn btn-danger">No</button>
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
