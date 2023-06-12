let angle = 0.0;
let offset = 60;
let scalar = 40;
let speed = 0.05;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	let y1 = offset + sin(angle) * scalar;
	let y2 = offset + sin(angle + 0.4) * scalar;
	let y3 = offset + sin(angle + 0.8) * scalar;
	ellipse(80, y1, 40, 40);
	ellipse(120, y2, 40, 40);
	ellipse(160, y3, 40, 40);
	angle += speed;
}
