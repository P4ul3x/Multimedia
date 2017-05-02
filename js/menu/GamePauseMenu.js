"use strict";

// @Version: 0.1.0

class GamePauseMenu extends Menu {

	constructor(){

		super("GamePauseMenu");
	}

	static test(){
		console.log("TEST: GAME PAUSE MENU");
		console.log("GAME PAUSE MENU TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

