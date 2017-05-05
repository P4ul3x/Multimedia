"use strict";

class Representation extends Component {

	constructor(entity,imageSource){

		super(entity);

		if(typeof imageSource !== "string") throw "Representation: constructor(): InvalidArgumentsException";

		this.pixels;
	}

	/*
		TODO
	*/
	getRepresentationData(){

	}
}

