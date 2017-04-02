const pressed = [];
const code = 'wohoo';

window.addEventListener('keyup', function(e) {
	pressed.push(e.key);
	pressed.splice(-code.length - 1, pressed.length - code.length);
	if (pressed.join('').includes(code)) {
		cornify_add();
	}
})