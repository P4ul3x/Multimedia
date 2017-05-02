"use strict";

// @Version: 0.1.2

class Menu {

	constructor(identification){

		if(typeof identification !== "string")
			throw "Menu: constructor(): InvalidArgumentsException";

		this.division = document.getElementById(identification);
	}

	show(){
		this.division.style.display = "block";
	}

	hide(){
		this.division.style.display = "none";
	}

	static test(){
		console.log("TEST: MENU");
		console.log("MENU TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

