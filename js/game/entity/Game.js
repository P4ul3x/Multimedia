"use strict";

class Game extends Engine {

	constructor(context){

		super();

		this.addComponent(new Context(this,context));
	}

	static test(){
		console.log("TEST: GAME");
		try {
			let context = document.getElementById("TestCanvas").getContext("2d");
			let game = new Game(context);
			let entity1 = new Entity();
			entity1.addComponent(new Representation(entity1,"imageSource"));
			entity1.addComponent(new Position(entity1,100,20));
			entity1.addComponent(new Visible(entity1));
			entity1.addComponent(new Context(entity1,context));
			game.addEntity(entity1);

			game.start();

			window.setTimeout(function(){
				game.stop();
				console.log("GAME TEST SUCCEEDED");
				window.dispatchEvent(new Event("done"));
			},3000);
		}
		catch(error){
			console.log("GAME TEST FAILED: " + error);
			window.dispatchEvent(new Event("done"));
		}
	}
}

