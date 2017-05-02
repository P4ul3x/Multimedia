"use strict";

// @Version: 0.1.0

class CreditsMenu extends Menu {

	constructor(){

		super("CreditsMenu");
	}

	static test(){
		console.log("TEST: CREDITS MENU");
		console.log("CREDITS MENU TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

