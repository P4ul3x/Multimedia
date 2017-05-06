"use strict";

class Game extends Engine {

	constructor(){

		super();
	}

	static test(){
		console.log("TEST: GAME");
		try {
			let game = new Game();
			let context = new Context(game,document.getElementById("TestCanvas").getContext("2d"));
			let entity1 = new Entity();
			let image = new Image();

			image.addEventListener("load",function(){
				entity1.addComponent(context);
				entity1.addComponent(new Representation(entity1,image));
				entity1.addComponent(new Position(entity1,100,20));
				entity1.addComponent(new Visible(entity1));
				entity1.addComponent(new Speed(entity1,10,0));
				game.addEntity(entity1);
				
				game.start();

				window.setTimeout(function(){
					game.stop();
					console.log("GAME TEST SUCCEEDED");
					window.dispatchEvent(new Event("done"));
				},1000);
			});
			image.crossOrigin = "Anonymous";
			image.src = "https://github.com/P4ul3x/Multimedia/blob/master/resources/menu/keyup.png?raw=true";
		}
		catch(error){
			console.log("GAME TEST FAILED: " + error);
			window.dispatchEvent(new Event("done"));
		}
	}
}

