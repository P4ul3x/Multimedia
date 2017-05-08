"use strict";

class Representation extends Component {

	constructor(imageData,framesToLive=Number.POSITIVE_INFINITY){

		super(framesToLive);

		if(!(imageData instanceof ImageData)) throw "Representation: constructor(): InvalidArgumentsException";

		this.imageData = imageData;
	}

	// @OVERRIDE
	get value(){

		return this.imageData;
	}
}

