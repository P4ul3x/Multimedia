"use strict";

// @Version: 0.1.0

class SinglePlayerMenu extends Menu {

	constructor(){

		super("SinglePlayerMenu");
	}

	static test(){
		console.log("TEST: SINGLE PLAYER MENU");
		console.log("SINGLE PLAYER MENU TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

