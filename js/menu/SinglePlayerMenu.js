"use strict";

// @Version: 0.1.0

class SinglePlayerMenu extends Menu {

	constructor(){
		super("SinglePlayerMenu");
		
		this.availableLevels = [];
		this.availableCharacters = [1];	
		this.selectedLevel = -1;
		this.selectedCharacter = -1;

		this.levelButton = document.getElementsByClassName("levelButton");
		this.characterButton = document.getElementsByClassName("characterButton");
		this.slideshow = document.getElementById("slideshow");
		this.backButton = document.getElementById("backButtonSinglePlayer");
		this.startButton = document.getElementById("startButtonSinglePlayer");


		for (var i = 0; i < 4; i++) {
			this.levelButton[i].addEventListener("click", this.levelButtonClickHandler.bind(this));
			this.characterButton[i].addEventListener("click", this.characterButtonClickHandler.bind(this));
		}
		this.backButton.addEventListener("click", this.backButtonClickHandler.bind(this));
		this.startButton.addEventListener("click", this.startButtonClickHandler.bind(this));
	}

	/*
		character Button Click Handler
		-set new selected level
		-change slideshow
	*/

	levelButtonClickHandler(ev){

		// Make character1 available (we don't have more) to select after we pick a map
		this.characterButton[0].disabled = false;

		ev.stopPropagation();
		
		let selected;

		//selected is the number of the button
		selected = parseInt(ev.target.id.charAt(ev.target.id.length-1));
		
		if(this.selectedLevel>0)
			this.levelButton[this.selectedLevel-1].style.borderStyle = "outset";
		
		if(this.availableLevels.includes(selected)){
			this.selectedLevel = selected;
			ev.target.style.borderStyle = "inset";
		}
		else
			this.selectedLevel;
	}

	/*
		character Button Click Handler
		-set new selected character
		-change slideshow
	*/

	characterButtonClickHandler(ev){
		ev.stopPropagation();
		let selected;

		// Make the start button clicable after we pick a character (can't start a game without picking first)
		this.startButton.disabled = false;


		//selected is the number of the button last character
		selected = parseInt(ev.target.id.charAt(ev.target.id.length-1));
		
		if(this.selectedCharacter>0)
			this.characterButton[this.selectedCharacter-1].style.borderStyle = "outset";

		
		if(this.availableCharacters.includes(selected)){
			this.selectedCharacter = selected;
			ev.target.style.borderStyle = "inset";
			this.slideshow.style.backgroundImage = "url(../resources/menu/SinglePlayerMenu/character"+selected+".png)";
			this.slideshow.style.animationName = "animationImage";
			this.slideshow.style.backgroundSize = "1560px 390px";
		}
		else{
			this.selectedCharacter = -1;
			this.slideshow.style.backgroundImage = "url(../resources/menu/SinglePlayerMenu/notAvailable.png)";
			this.slideshow.style.animationName = "none";
			this.slideshow.style.backgroundSize = "390px 390px";
		}	
	}

	/*
		back button click handler
		- go back to main menu
		- deselect the selected options
	*/

	backButtonClickHandler(ev){
		ev.stopPropagation();
		
		window.dispatchEvent(new Event("showMainMenu"));
		
		if(this.selectedLevel>0)
			this.levelButton[this.selectedLevel-1].style.borderStyle = "outset";

		if(this.selectedCharacter>0)
			this.characterButton[this.selectedCharacter-1].style.borderStyle = "outset";
		
		this.selectedLevel = -1;
		this.selectedCharacter = -1;

		// restore default disabled button states
		this.characterButton[0].disabled = true;
		this.startButton.disabled = true;
	}

	/*
		start button click handler
		-TODO
	*/


	startButtonClickHandler(ev){
		ev.stopPropagation();
		console.log("Person pressed start... it's not very effective");
	}



	static test(){
		console.log("TEST: SINGLE PLAYER MENU");
		console.log("SINGLE PLAYER MENU TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

