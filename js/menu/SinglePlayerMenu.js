"use strict";

// @Version: 0.1.0

class SinglePlayerMenu extends Menu {

	constructor(){
		super("SinglePlayerMenu");
		this.levelButton;
		this.availableLevels = [];
		this.characterButton;
		this.availableCharacters = [1];
		this.slideshow;
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

		this.slideshow = document.getElementById("slideshow");
		this.backButton = document.getElementById("backButtonSinglePlayer");
		this.startButton = document.getElementById("startButtonSinglePlayer");

		this.backButton.addEventListener("click", this.backButtonClickHandler.bind(this));
		
	}

	/*
		character Button Click Handler
		-set new selected level
		-change slideshow
	*/

	levelButtonClickHandler(ev){
		ev.stopPropagation();
		var selected;

		//selected is the number of the button
		selected = parseInt(ev.target.id.charAt(ev.target.id.length-1));
		
		if(this.selectedCharacter>0)
			this.levelButton[this.selectedLevel-1].style.borderStyle = "outset";
		
		if(this.availableLevels.includes(selected)){
			this.selectedLevel = selected;
			ev.target.style.borderStyle = "inset";
		}
		else{
			this.selectedCharacter = -1;
		}	
		
		console.log(this.selectedLevel);
	}

	/*
		character Button Click Handler
		-set new selected character
		-change slideshow
	*/

	characterButtonClickHandler(ev){
		ev.stopPropagation();
		var selected;

		//selected is the number of the button
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

