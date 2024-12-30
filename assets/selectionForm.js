export class SelectionForm {
	constructor(formContainer, formOptions, types) {
		this.formContainer = formContainer;
		this.formOptions = formOptions || {};
		this.types = types ? `All ${types}` : 'Select All';

		if (!this.formContainer) {
			console.log('No container provided');
		}
		this.hasMultipleOptions = this.formOptions.length > 1 ? true : false;

		this.init();
	}
	init() {
		this.createForm();
		this.initSelectAllLogic();
		this.initCheckBoxDeselectLogic();
	}
	createForm() {
		const form = document.createElement('form');
		const hr = document.createElement('hr');
		const footer = document.createElement('div');
		const button = document.createElement('button');

		form.id = 'selection-form';
		// create a select all option if muliple options exist
		if (this.hasMultipleOptions) {
			form.appendChild(this.createFormOptions(this.types, 'select-all'));
			const hr = document.createElement('hr');
			form.appendChild(hr);
		}
		// generate the options
		this.formOptions.forEach((option) => {
			form.appendChild(this.createFormOptions(option.name, option.id));
		});
		// create footer part
		button.type = 'submit';
		button.id = 'selection-form-button';
		button.textContent = 'Done';
		button.addEventListener('click', (e) => {
			e.preventDefault();
			this.sendFormData();
		});

		footer.className = 'form-footer';
		footer.appendChild(hr);
		footer.appendChild(button);

		form.appendChild(footer);
		this.formContainer.appendChild(form);
	}
	createFormOptions(name, id) {
		const label = document.createElement('label');
		label.className = 'form-option';
		label.setAttribute('for', id);
		label.textContent = name;

		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = id;

		const span = document.createElement('span');
		span.className = 'checkmark';

		label.appendChild(checkbox);
		label.appendChild(span);

		return label;
	}
	initSelectAllLogic() {
		const form = this.formContainer.querySelector('#selection-form');
		const selectAllCheckbox = form.querySelector('#select-all');
		const checkboxes = form.querySelectorAll(
			'input[type="checkbox"]:not(#select-all)'
		);
		// Add event listener to select all
		selectAllCheckbox.addEventListener('change', () => {
			const isChecked = selectAllCheckbox.checked;
			checkboxes.forEach((checkbox) => {
				checkbox.checked = isChecked;
			});
		});
	}
	initCheckBoxDeselectLogic() {
		const form = this.formContainer.querySelector('#selection-form');
		const selectAllCheckbox = form.querySelector('#select-all');
		const checkboxes = form.querySelectorAll(
			'input[type="checkbox"]:not(#select-all)'
		);

		// Add event listeners to individual checkboxes
		checkboxes.forEach((checkbox) => {
			checkbox.addEventListener('change', () => {
				// Check if all checkboxes are selected
				const allSelected = Array.from(checkboxes).every((cb) => cb.checked);
				// Update the "select-all" checkbox
				selectAllCheckbox.checked = allSelected;
			});
		});
	}
	sendFormData() {
		const form = this.formContainer.querySelector('#selection-form');
		const data = {};
		const checkboxes = form.querySelectorAll('input[type="checkbox"]');
		const selectAllCheckbox = form.querySelector('#select-all');
		// check the select all box first
		if (selectAllCheckbox && selectAllCheckbox.checked) {
			// If "select-all" is checked, mark all individual pages as selected
			checkboxes.forEach((checkbox) => {
				if (checkbox.id !== 'select-all') {
					// Don't include the "select-all" itself
					data[checkbox.id] = true;
				}
			});
		} else {
			// individually select pages
			checkboxes.forEach((checkbox) => {
				if (checkbox.checked && checkbox.id !== 'select-all') {
					data[checkbox.id] = true;
				}
			});
		}

		console.log('Selected Form Data:', data);
		// send formData to wherever
	}
}