const modal = document.querySelector('.modal-container');
export function createModal() {
    if (modal) {
        const openModal = document.querySelector('.map-contacts__btn');
        const closeModal = document.querySelector('.modal__close-btn');

        openModal.addEventListener('click', function() { 
            modal.style.display = 'block';
        });
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        window.onclick = function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };
        document.addEventListener('keyup', (e) => {
            if(e.key === 'Escape') {
                modal.style.display = 'none';
            }
        });
    }
}

/* const modal = document.querySelector('.modal');

export function createModal() {
	if (modal) {
		const overlay = document.getElementById('overlay');
		const buttonCloseModal = document.querySelector('.modal__close-btn');
		const buttonOpenModal = document.querySelector('.map-contacts__btn');
		const ACTIVE = 'active';

		const isShowModal = (el) => {
			el.classList.toggle(ACTIVE);
			overlay.classList.toggle(ACTIVE)
		}

		buttonOpenModal.onclick = () => isShowModal(modal);
		buttonCloseModal.onclick = () => isShowModal(modal);
		overlay.onclick = () => isShowModal(modal);

		document.addEventListener('keyup', (e) => {
			if (e.key === 'Escape') {
				isShowModal(modal);
				console.log(e.key, 'esc');
			}
		})
	}
} */