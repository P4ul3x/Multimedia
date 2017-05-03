"use strict";

// @Version: 0.1.1

class OptionsMenu extends Menu {

	constructor(){

		super("OptionsMenu");
		this.backButton = document.getElementById("OptionsMenuBackButton");
		this.backButton.addEventListener("click",this.backButtonClickHandler);

		this.volumeControl = document.getElementById("VolumeControl");
		this.volumeControl.addEventListener("change", this.setVolume);
		this.volumeControl.addEventListener("input", this.setVolume); // tive que adicionar 2 listeners para compatibilidade
	}

	backButtonClickHandler(){
		window.dispatchEvent(new Event("showMainMenu"));
	}

	setVolume() {
		var music = document.getElementById("music");
		music.volume = this.value;
		console.log(this.value);
	}

	static test(){
		console.log("TEST: OPTIONS MENU");
		console.log("OPTIONS MENU TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

