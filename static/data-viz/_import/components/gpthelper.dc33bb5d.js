import * as Inputs from "../../_observablehq/stdlib/inputs.3a5e99d2.js";

export function createCanvas(width) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = 110;
    canvas.context = canvas.getContext("2d");
    return canvas;
}

export function drawRect(canvas, { x = 1, y = 1, w = 100, h = 50, fill = "black", stroke } = {}) {
    const ctx = canvas.context;

    // Set fill color
    ctx.fillStyle = fill;
    ctx.fillRect(x, y, w, h);

    // Optional stroke
    if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.strokeRect(x, y, w, h);
    }
}
