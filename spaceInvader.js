"use strict";

drawLine();
alert("Draw your space invader here");
function drawLine(signature) {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

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
}
