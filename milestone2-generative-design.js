"use strict";

import context from "../../Scripts/context.js";
import * as Utils from "../../Scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousedown = click;
window.onmousemove = move;

let x = width;
let y = height;

/**
 *
 * @param {MouseEvent} eventData
 */
function move(evenData) {
	let x = evenData.pageX;
	let y = evenData.pageY;
	drawRandomCircles();
}
function drawRandomCircles() {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);

	for (let i = 0; i < 500; i++) {
		let x = Math.random() * width;
		let y = Math.random() * height;

		context.fillStyle = Utils.hsl(Math.random() * 360, 50, 50);

		Utils.fillCircle(x, y, 30);
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
		Utils.drawLine(x, 0, width, y);
		Utils.drawLine(0, y, x, height);
	}
}
