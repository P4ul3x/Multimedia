"use strict";

class Representation extends Component {

	constructor(image){

		super();

		if(!(image instanceof Image)) throw "Representation: constructor(): InvalidArgumentsException";

		let context = window.GLOBAL.operationContext;
		context.clearRect(0,0,context.canvas.width,context.canvas.height);
		context.canvas.width = image.width;
		context.canvas.height = image.height;
		context.drawImage(image,0,0);
		
		this.imageData = context.getImageData(0,0,image.width,image.height);
	}

	/*
		@OVERRIDE
	*/
	get value(){

		return this.imageData;
	}
}

