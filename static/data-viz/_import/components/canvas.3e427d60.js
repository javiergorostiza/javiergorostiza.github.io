export function createCanvas(width, height = 200){
	const canvas = document.createElement("canvas"); 	// Create canvas element
	canvas.height = height;
	canvas.width = width;

	const context = canvas.getContext("2d"); 			// Set the context to 2D drawing
	canvas.context = context; 							// Attatch the context object as a property of the canvas itself

	return canvas;
}

export function drawRect(canvas,
	{ x = 1, y = 1, w = 100, h = 50, fill, stroke } = {}) {

	console.log("fill parameter: ", fill);
	// Check if the fill parameter is passed:
	if (fill){
		let fillColor;

		//
		if (fill.type) {
			console.log("IT WORKS");
			if (fill.type === "rgb"){
				fillColor = `rgb(${fill.R}, ${fill.G}, ${fill.B})`;
			}
			else if (fill.type === "hsl"){
				fillColor = `hsl(${fill.H}, ${fill.S}%, ${fill.L}%)`;
			}
		}
		else {
			fillColor = fill;
			console.log("ERORRRRRR: fill.type does not exist");
		}
		canvas.context.fillStyle = fillColor;
    	canvas.context.fillRect(x, y, w, h);
		}

	// Check if the stroke parameter is passed:
	if (stroke){
		let strokeColor;

		// Check if stroke parameter is an object with a type field:
		if (stroke.type) {
			if (stroke.type === "rgb"){
				strokeColor = `rgb(${stroke.R}, ${stroke.G}, ${stroke.B})`;
			}
			else if (stroke.type === "hsl"){
				strokeColor = `hsl(${stroke.H}, ${stroke.S}%, ${stroke.L}%)`;
			}
		}
		else {
			strokeColor = stroke;
		}
		canvas.context.strokeStyle = strokeColor;
    	canvas.context.strokeRect(x, y, w, h);
		}
}

export function drawCircle(canvas, x, y, r) {
    canvas.context.beginPath();
    canvas.context.arc(x, y, r, 0, Math.PI * 2);
    canvas.context.stroke();
}
