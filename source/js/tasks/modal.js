const modal = document.querySelector('.modal-container');
    //Открытие модального окна
    const openModal = () => {
        modal.classList.remove('modal-close');
    }
    let buttonOpenModal = document.querySelector('.map-contacts__btn');
        buttonOpenModal.addEventListener('click', openModal);
    //Закрытие модального окна
    const closeModal = () => {
        modal.classList.add('modal-close');
    }
    let buttonCloseModal = document.querySelector('.modal__close-btn');
    let bodyCloseModal = document.querySelector('.modal-container');
        buttonCloseModal.addEventListener('click', closeModal);
        bodyCloseModal.addEventListener('click', closeModal);