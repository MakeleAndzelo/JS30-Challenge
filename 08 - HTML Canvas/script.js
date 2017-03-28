const canvas = document.querySelector("#can");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

let drawing = false;
let endX = 0;
let endY = 0;
let hue = 0;
let direction = false;

function draw(e) {
	if(!drawing) return;

	ctx.beginPath();
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.moveTo(endX, endY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	[endX, endY] = [e.offsetX, e.offsetY];
	hue = hue > 360 ? 0 : hue + 1;
	if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
		direction = !direction;
	}

	if (direction) {
		ctx.lineWidth++;
	} else {
		ctx.lineWidth--;
	}
}

canvas.addEventListener('mousedown', (e) => {
	drawing = true;
	[endX, endY] = [e.offsetX, e.offsetY];

	
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseout', () => drawing = false);
