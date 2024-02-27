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
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
        document.addEventListener('keyup', (e) => {
            if(e.key === 'Escape') {
                modal.style.display = 'none';
            }
        })
    }
}