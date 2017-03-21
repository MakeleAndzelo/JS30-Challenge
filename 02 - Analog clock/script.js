function setDate() {
	const time = new Date();
	const seconds = time.getSeconds();
	const minutes = time.getMinutes();
	const hours = time.getHours();

	const secondsDeg = (seconds / 60) * 360;
	const minutesDeg = (minutes / 60) * 360;
	const hoursDeg = (hours / 12) * 360;

	document.querySelector('#seconds-hand').style.transform = `rotate(${secondsDeg}deg)`
	document.querySelector('#minutes-hand').style.transform = `rotate(${minutesDeg}deg)`
	document.querySelector('#hours-hand').style.transform = `rotate(${hoursDeg}deg)`
}

setInterval(setDate, 1000);