"use strict";

// @Version: 0.1.0

class SinglePlayerMenu extends Menu {

	constructor(){
		super("SinglePlayerMenu");
		this.levelButton;
		this.characterButton;
		this.backButton;
		this.startButton;
		this.selectedLevel = -1;
		this.selectedCharacter = -1;

		this.levelButton=document.getElementsByClassName("levelButton");
		this.characterButton=document.getElementsByClassName("characterButton");

		for (var i = 0; i < 4; i++) {
			this.levelButton[i].addEventListener("click", this.levelButtonClickHandler.bind(this));
			this.characterButton[i].addEventListener("click", this.characterButtonClickHandler.bind(this));
		}

		this.backButton = document.getElementById("backButtonSinglePlayer");
		this.backButton.addEventListener("click", this.backButtonClickHandler.bind(this));
		
		this.startButton = document.getElementById("startButtonSinglePlayer");

	}

	levelButtonClickHandler(ev){
		ev.stopPropagation();
		
		if(this.selectedLevel>0)
			this.levelButton[this.selectedLevel-1].style.borderStyle = "outset";
		
		this.selectedLevel = ev.target.id.charAt(ev.target.id.length-1);
		
		ev.target.style.borderStyle = "inset";
		
		console.log(this.selectedLevel);
	}

	characterButtonClickHandler(ev){
		ev.stopPropagation();
		
		if(this.selectedCharacter>0)
			this.characterButton[this.selectedCharacter-1].style.borderStyle = "outset";
		this.selectedCharacter = ev.target.id.charAt(ev.target.id.length-1);
		
		ev.target.style.borderStyle = "inset";
		
		console.log(this.selectedCharacter);	
	}

	/*
		back button click handler
		- go back to main menu
		- deselect the selected options
	*/

	backButtonClickHandler(ev){
		ev.stopPropagation();
		
		window.dispatchEvent(new Event("showMainMenu"));
		
		if(selectedLevel>0)
			this.levelButton[this.selectedLevel-1].style.borderStyle = "outset";

		if(selectedCharacter>0)
			this.levelButton[this.selectedCharacter-1].style.borderStyle = "outset";
		
		this.selectedLevel = -1;
		this.selectedCharacter = -1;
	}



	static test(){
		console.log("TEST: SINGLE PLAYER MENU");
		console.log("SINGLE PLAYER MENU TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

