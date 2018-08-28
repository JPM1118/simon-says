class Modal {
  constructor() {
    this.modal = document.querySelector(".modal");
    this.closeModalBtn = document.querySelector(".modal__close-btn");

    this.events();
  }

  events() {
    this.closeModalBtn.addEventListener("click", this.closeModal.bind(this));
  }

  closeModal() {
    this.modal.classList.remove("modal--is-visible");
  }
}

export default Modal;
