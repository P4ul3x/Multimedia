"use strict";

class Context extends Component {

	constructor(context){

		super();

		if(!(context instanceof CanvasRenderingContext2D)) throw "Context: constructor(): InvalidArgumentsException";

		this.context = context;
	}

	/*
		@OVERRIDE
	*/
	get value(){
		
		return this.context;
	}
}

