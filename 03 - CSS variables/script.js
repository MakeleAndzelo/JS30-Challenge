function changeVariables() {
	const suffix = this.dataset.sizing || '';

	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

const inputs = document.querySelectorAll('.controls');

inputs.forEach(input => input.addEventListener('onchange', changeVariables));
inputs.forEach(input => input.addEventListener('mousemove', changeVariables));