"use strict";

import context from "../../Scripts/context.js";
import * as Utils from "../../Scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

// Coordinates for the cross lines
let x = width;
let y = height;

// First draw the background circles
drawRandomCircles();
drawLine();

function drawLine() {
	for (let y = 100; y < height; y += 100) {
		context.lineWidth = 50;
		Utils.drawLine(0, y, width, y);
	}
}

function drawRandomCircles() {
	// Set a fill color for the background
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height); // Clear and fill the canvas

	for (let i = 0; i < 1000; i++) {
		let x = Math.random() * width;
		let y = Math.random() * height;

		context.fillStyle = Utils.hsl(Math.random() * 360, 50, 50);

		Utils.fillCircle(x, y, 45);
	}
}
