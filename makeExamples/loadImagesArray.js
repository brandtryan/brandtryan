let numFrames = 12; // The number of framees
let images = []; // Make the array
let currentFrame = 0;

function preload() {
	for (let i = 0; i < numFrames; i++) {
		let imageName = 'media/frame-' + nf(i, 4) + '.png';
		images[i] = loadImage(imageName); // Load each image
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate = 24;
}

function draw() {
	image(images[currentFrame], 0, 0);
	currentFrame++; // Next frame
	if (currentFrame == images.length) {
		currentFrame = 0; // Return to first frame
	}
}
