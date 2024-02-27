import {
	slider
}
from "./tasks/slider.js";

/* import {
	modal
}
from "./tasks/modal.js"; */


document.addEventListener('DOMContentLoaded', () => {
	slider();
	//modal();
})


import { createModal } from "./tasks/modal.js";

document.addEventListener('DOMContentLoaded', () => {
	createModal();
});

