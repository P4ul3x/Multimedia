"use strict";

// @Version: 0.1.0

class MultiPlayerMenu extends Menu {

	constructor(){

		super("MultiPlayerMenu");
	}

	static test(){
		console.log("TEST: MULTI PLAYER MENU");
		console.log("MULTI PLAYER MENU TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

