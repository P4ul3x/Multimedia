"use strict";

class Context extends Component {

	constructor(entity,context){

		super(entity);

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

