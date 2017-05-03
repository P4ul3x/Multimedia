"use strict";

// @Version: 0.1.3

class GameMenu extends Menu {

	constructor(){

		super("GameMenu");

		this.canvas = document.getElementById("GameMenuCanvas");

		window.addEventListener("backKeyUp",this.backKeyUpHandler);
	}

	backKeyUpHandler(keyEvent){

		window.dispatchEvent(new Event("showGamePauseMenu"));
	}

	// @OVERRIDE
	hide(){

		window.removeEventListener("backKeyUp",this.backKeyUpHandler);

		super.hide();
	}

	static test(){
		console.log("TEST: GAME MENU");
		console.log("GAME MENU TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

