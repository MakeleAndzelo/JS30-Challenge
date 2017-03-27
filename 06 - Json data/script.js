const searchInput = document.querySelector(".city-search");
const searchOutput = document.querySelector(".cities");

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data));

function filterCities(expression, cities) {
	return cities.filter(place => {
		const regex = new RegExp(expression, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	})
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayCities() {
	const matchArray = filterCities(this.value, cities);
	let html = matchArray.map(place => {
		const regex = new RegExp(this.value, 'gi');
		const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
		const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
		return '<li class="list-group-item">' + cityName + ', ' + stateName + ' <span class="pull-right">' + numberWithCommas(place.population) + '</span></li>';
	}).join('');
	searchOutput.innerHTML = html;
}



searchInput.addEventListener('change', displayCities);
searchInput.addEventListener('keyup', displayCities);