const panels = document.querySelectorAll('.panel');

function toggleOpen(click) {
	this.classList.toggle('open');
}

function toggleOpenActive(e) {
	if(e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
	return;
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive))