"use strict";

// @Version: 0.1.0

class SinglePlayerMenu extends Menu {

	constructor(){
		super("SinglePlayerMenu");
		var levelButton = new Array()
		var characterButton = newArray()

		for(let i=1; i<5 ;++i)
			levelButton.append(document.getElementById("levelButton"+i))
		for(let i=1; i<5 ;++i)
			characterButton.append(document.getElementById("characterButton"+i))
	}

	static test(){
		console.log("TEST: SINGLE PLAYER MENU");
		console.log("SINGLE PLAYER MENU TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

