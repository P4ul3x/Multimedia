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
	update(){

		this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);
	}

	/*
		@OVERRIDE
	*/
	get value(){
		
		return this.context;
	}
}

