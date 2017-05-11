"use strict";

class Game extends Engine {

	constructor(context){

		super();

		if(!(context instanceof CanvasRenderingContext2D)) throw "Game: constructor(): InvalidArgumentsException";

		this._context = context;
	}

	get context(){

		return this._context;
	}

	set context(context){

		if(!(context instanceof CanvasRenderingContext2D)) throw "Game: setContext(): InvalidArgumentsException";

		this._context = context;
	}

	// @OVERRIDE
	start(){

		this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);

		super.start();
	}

	static test(){
		
		try{
			var context = document.getElementById("TestCanvas").getContext("2d");
			var game = new Game(context);

			game.addEntity(new Player(game));

			game.start();

			window.setTimeout(function(){
				game.stop()
				console.log("GAME TEST SUCCESS");
				window.dispatchEvent(new Event("done"));
			},20000);
		}
		catch(error){
			console.log("GAME TEST FAILED : " + error);
			window.dispatchEvent(new Event("done"));
		}

	}
}

