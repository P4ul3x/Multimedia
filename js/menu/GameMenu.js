"use strict";

// @Version: 0.1.3

class GameMenu extends Menu {

	constructor(){

		super("GameMenu");

		this.canvas = document.getElementById("GameMenuCanvas");

		window.addEventListener("backKeyUp",this.backKeyUpHandler.bind(this));
	}

	backKeyUpHandler(keyEvent){

		window.dispatchEvent(new Event("showMainMenu"));
	}

	// @OVERRIDE
	hide(){

		window.removeEventListener("backKeyPress",this.backKeyPressHandler);

		super.hide();
	}

	static test(){
		console.log("TEST: GAME MENU");
		let menu = new GameMenu();
		window.addEventListener("showMainMenu",function(){
			console.log("GAME MENU TEST SUCCEEDED");
			window.dispatchEvent(new Event("done"));
		});
		menu.show();
	}
}

