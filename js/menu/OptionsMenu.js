"use strict";

// @Version: 0.1.0

class OptionsMenu extends Menu {

	constructor(){

		super("OptionsMenu");
	}

	static test(){
		console.log("TEST: OPTIONS MENU");
		console.log("OPTIONS MENU TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

