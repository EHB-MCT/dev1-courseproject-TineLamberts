"use strict";

import context from "../../Scripts/context.js";
import * as Utils from "../../Scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousedown = click;

let x = width;
let y = height;

drawLine();
drawRandomCircles();

function drawRandomCircles() {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);

	for (let i = 0; i < 1000; i++) {
		let x = Math.random() * width;
		let y = Math.random() * height;

		context.fillStyle = Utils.hsl(Math.random() * 360, 50, 50);

		Utils.fillCircle(x, y, 45);
	}
}

/**
 *
 * @param {MouseEvent} e
 */

function click(e) {
	console.log(e.pageX + " " + e.pageY);
	drawLine();
}

function drawLine() {
	for (let x = 0, y = 0; x < width || y < height; x += 100, y += 100) {
		context.lineWidth = 50;
		//kleiner maken
		Utils.drawLine(x, 0, width, y);
		Utils.drawLine(0, y, x, height);
	}
}
