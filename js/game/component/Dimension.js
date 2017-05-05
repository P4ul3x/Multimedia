"use strict";

class Dimension extends Component {

	constructor(entity,width,height){

		super(entity);

		if(typeof width !== "number"
		|| typeof height !== "number"
		) throw "Dimension: constructor(): InvalidArgumentsException";

		this.width = width;
		this.height = height;
	}

	get width(){
		
		return this.width;
	}

	get height(){

		return this.height;
	}

	/*
		@OVERRIDE
	*/
	get value(){

		return this.width * this.height;
	}
}

