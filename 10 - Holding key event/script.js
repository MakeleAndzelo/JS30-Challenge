const checkboxes = document.querySelectorAll(".task input[type='checkbox']");

let lastChecked;

function handleCheckbox(e) {
	if (e.shiftKey && this.checked ) {
		let inBetween = false;
		checkboxes.forEach(checkbox => {
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		})
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheckbox));