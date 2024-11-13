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
	context.lineWidth = 50;
	context.strokeStyle = "black";
	Utils.drawLine(x, 0, x, height);
	Utils.drawLine(0, y, width, y);
	for (let i = 0; i < 10000; i++) {
		let x = i * 100;
		let y = i * 100;
	}
}

function drawRandomCircles() {
	// Set a fill color for the background
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height); // Clear and fill the canvas

	for (let i = 0; i < 10000; i++) {
		let x = Math.random() * width;
		let y = Math.random() * height;

		context.fillStyle = Utils.hsl(Math.random() * 360, 50, 50);

		Utils.fillCircle(x, y, 10);
	}
}
