# Ellty-Task-1

Replicate the Figma design by creating a reusable JavaScript component for creating selection forms with "Select All" functionality.

# Selection Form Component

## Features

- Dynamic form generation
- "Select All" functionality
- Custom SVG checkmarks
- Form data handling
- Auto-clearing after submission

## Installation

Add required files:

```
assets/
  ├── selectionForm.js
  ├── script.js
  └── styles.css
```

HTML setup:

```html
<div class="form-container"></div>
<script type="module" src="./assets/script.js"></script>
```

## Usage

```javascript
import { SelectionForm } from './selectionForm.js';

const formContainer = document.querySelector('.form-container');
const options = [
	{ name: 'Page 1', id: 'page_1' },
	{ name: 'Page 2', id: 'page_2' },
];
const types = 'Pages';

const selectionForm = new SelectionForm(formContainer, options, types);
selectionForm.init();
```

## API

### Constructor

```javascript
new SelectionForm(formContainer, formOptions, types);
```

**Parameters:**

- `formContainer`: HTMLElement - Form container
- `formOptions`: Array - Options with name/id pairs
- `types`: String - "Select All" label prefix

### Methods

- `init()`: Initialize form
- `sendFormData()`: Process form data
- `clearForm()`: Reset checkboxes

### Output

```javascript
{
    "page_1": true,
    "page_2": true
}
```

## CSS Classes

- `.form-option`: Checkbox container
- `.checkmark`: Custom checkbox
- `.svg-checkmark`: Checkmark icon
- `.form-footer`: Form footer

## Requirements

- Modern browser (ES6+)
- SVG support
- CSS custom properties
