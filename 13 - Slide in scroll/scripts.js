function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const sliderElements = document.querySelectorAll(".slide-in");

function handleSlider(e) {
	sliderElements.forEach(sliderElement => {
		const slideInAt = (window.scrollY + window.innerHeight) - sliderElement.clientHeight / 2;
		console.log(slideInAt);
		const imageBottom = sliderElement.offsetTop = sliderElement.clientHeight;
		//console.log(imageBottom);
		const isHalfShown = slideInAt > sliderElement.offsetTop;
		//console.log(isHalfShown);
		const isNotScrolledPast = window.scrollY < imageBottom;
		//console.log(isNotScrolledPast);
		if (isHalfShown) {
			sliderElement.classList.add('active');
		}
	});
}

window.addEventListener('scroll', debounce(handleSlider));