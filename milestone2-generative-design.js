//Voor mijn space invader rechts vanonder te krijgen is chatGPT gebruikt geweest
//https://chatgpt.com/share/6763185f-5b90-800e-911e-61ffd7cb43fd

"use strict";

import context from "../../Scripts/context.js";
import * as Utils from "../../Scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousedown = click;
window.onmousemove = move;

let x = width;
let y = height;

drawSpace();

//Space invador

drawSpace();
function drawSpace() {
	//geschreven door chatGPT
	context.save();
	context.translate(canvas.width - 300, canvas.height - 300);

	//Zelf geschreven
	context.fillStyle = "black";
	context.beginPath();
	context.rect(0, 0, 300, 300);
	context.fill();

	context.fillStyle = "blue";
	context.beginPath();
	context.moveTo(125, 25);
	context.rect(125, 25, 50, 50);
	context.moveTo(75, 100);
	context.rect(75, 75, 150, 50);
	context.rect(175, 125, 50, 50);
	context.moveTo(75, 125);
	context.rect(75, 125, 50, 50);
	context.moveTo(125, 175);
	context.rect(125, 175, 50, 50);
	context.moveTo(10, 200);
	context.rect(25, 225, 250, 50);
	context.fill();

	context.restore();
}

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
