"use strict";

class Representation extends Component {

	constructor(imageData,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(entity,framesToLive);

		if(!(imageData instanceof ImageData)) throw "Representation: constructor(): InvalidArgumentsException";

		this._imageData = imageData;
	}

	set imageData(imageData){

		if(!(imageData instanceof ImageData)) throw "Representation: imageData(): InvalidArgumentsException";

		this._imageData = imageData;
	}

	get imageData(){

		return this._imageData;
	}

}

