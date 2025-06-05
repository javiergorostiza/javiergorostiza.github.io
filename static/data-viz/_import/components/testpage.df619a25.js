import * as Inputs from "../../_observablehq/stdlib/inputs.3a5e99d2.js";
import "../../_npm/@observablehq/plot@0.6.16/e828d8c8.js";

export function myfunk(){
	let myvar = "bananas";

	return myvar
}

export function controls(){
	const x = Inputs.range([0, 255], {step: 1});
	const y = Inputs.range([0, 100], {step: 1});

	return [
		x,
		y
	];
}

export function rectSize_sliders(){
	const dimensions = Inputs.form({
		width: Inputs.range([0, 500], {step: 1, label: "width"}),
 		heigt: Inputs.range([0, 500], {step: 1, label: "height"}),
	});

	return dimensions;
}

export function RGB_sliders(){
	const RGB = Inputs.form({
		R: Inputs.range([0, 255], {step: 1, label: "r"}),
 		G: Inputs.range([0, 255], {step: 1, label: "g"}),
 		B: Inputs.range([0, 255], {step: 1, label: "b"})
	});

	return RGB;
}

export function color_slider(model){
	if (model === "rgb"){
		const color = Inputs.form({
			R: Inputs.range([0, 255], { step: 1, label: "R" }),
            G: Inputs.range([0, 255], { step: 1, label: "G" }),
            B: Inputs.range([0, 255], { step: 1, label: "B" })
		});
		color.type = "rgb";
		return color;
	}
	else if (model === "hsl") {
		const color = Input.form({
			H: Inputs.range([0, 360], { step: 1, label: "H" }),
            S: Inputs.range([0, 100], { step: 1, label: "S", unit: "%" }),
            L: Inputs.range([0, 100], { step: 1, label: "L", unit: "%" })
		});
		color.type = "hsl";
		return color;
	}
	else {
		throw new Error("Unsuported color model");
	}

}


export function color_slider2(model){
	const color = {};

		color.slider = Inputs.form({
			R: Inputs.range([0, 255], { step: 1, label: "R" }),
            G: Inputs.range([0, 255], { step: 1, label: "G" }),
            B: Inputs.range([0, 255], { step: 1, label: "B" })
		});

        color.values = {
            //slider: slider,  // This will be used to render the form
            get R() { return color.slider.value.R; },
            get G() { return color.slider.value.G; },
            get B() { return color.slider.value.B; },
            //type: "rgb"
        };
	
		color.type = "rgb";
	
	return color;
	return color.values;
}

export function HSL_sliders(){
	const HSL = Inputs.form({
		H: Inputs.range([0, 255], {step: 1, label: "h"}),
 		S: Inputs.range([0, 255], {step: 1, label: "s"}),
 		L: Inputs.range([0, 255], {step: 1, label: "l"})
	});

	return HSL;
}

export function createContext2D(width, height, color){
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");

	//context.fillStyle = "red";
	context.fillStyle = `rgb(${color.R}, ${color.G}, ${color.B})`;
	context.fillStyle = `hsl(${color.H}, ${color.S}%, ${color.L})`;
	context.fillRect(0, 0, width, height);

	return context.canvas;
}


export function main(){

}
