import { SelectionForm } from './selectionForm.js';
const formContainer = document.querySelector('.form-container');
document.addEventListener('DOMContentLoaded', () => {
	// create form element
	const types = 'Pages'; // keep this plural (Boxes, Pages, etc)
	const options = [
		{ name: 'Page 1', id: 'page_1' },
		{ name: 'Page 2', id: 'page_2' },
		{ name: 'Page 3', id: 'page_3' },
		{ name: 'Page 4', id: 'page_4' },
	];
	const selectionForm = new SelectionForm(formContainer, options, types);
});
