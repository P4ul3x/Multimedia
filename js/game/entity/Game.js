"use strict";

class Game extends Engine {

	constructor(context){

		super();

		if(!(context instanceof CanvasRenderingContext2D)) throw "Game: constructor(): InvalidArgumentsException";

		this.context = context;
	}

	// @OVERRIDE
	start(){

		this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);

		super.start();
	}
}

