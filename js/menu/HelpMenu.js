"use strict";

// @Version: 0.1.2

class HelpMenu extends Menu {

	constructor(){

		super("HelpMenu");

		this.backButton = document.getElementById("HelpMenuBackButton");

		this.backButton.addEventListener("click",this.backButtonClickHandler);
	}

	backButtonClickHandler(){
		window.dispatchEvent(new Event("showMainMenu"));
	}

	static test(){
		console.log("TEST: HELP MENU");
		console.log("HELP MENU TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

