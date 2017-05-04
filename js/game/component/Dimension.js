"use strict";

class Dimension extends Component {

	constructor(entity,width,height){

		super(entity,this.constructor.name);

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

