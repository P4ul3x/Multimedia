"use strict";

class Game extends Engine {

	constructor(context){

		super();

		if(!(context instanceof Context)) throw "Game: constructor(): InvalidArgumentsException";

		this.addComponent(context);
		this.addComponent(new Representation(new Image(context.value.canvas.width,context.value.canvas.height)));
		this.addComponent(new Visible());
		this.addComponent(new Position(this,0,0));
		this.addComponent(new Draw(this));
	}

	static test(){
		console.log("TEST: GAME");
		try {
			let context = document.getElementById("TestCanvas").getContext("2d");
			let game = new Game(new Context(context));
			let entity1 = new Entity();
			let entity2 = new Entity();
			let image = new Image();

			image.addEventListener("load",function(){

				entity1.addComponent(new Context(context));
				entity1.addComponent(new Representation(image));
				entity1.addComponent(new Position(entity1,100,20));
				entity1.addComponent(new Visible());
				entity1.addComponent(new Velocity(entity1,1,1));
				entity1.addComponent(new Draw(entity1));
				game.addEntity(entity1);

				entity2.addComponent(new Context(context));
				entity2.addComponent(new Representation(image));
				entity2.addComponent(new Position(entity2,300,100));
				entity2.addComponent(new Visible());
				entity2.addComponent(new Velocity(entity2,0,1));
				entity2.addComponent(new Acceleration(0.1,0));
				entity2.addComponent(new Draw(entity2));
				game.addEntity(entity2);
				
				game.start();

				window.setTimeout(function(){
					game.stop();
					console.log("GAME TEST SUCCEEDED");
					window.dispatchEvent(new Event("done"));
				},5000);
			});
			image.crossOrigin = "Anonymous";
			image.src = "https://github.com/P4ul3x/Multimedia/blob/master/resources/menu/SinglePlayerMenu/interrogationMark.png?raw=true";
		}
		catch(error){
			console.log("GAME TEST FAILED: " + error);
			window.dispatchEvent(new Event("done"));
		}
	}
}

