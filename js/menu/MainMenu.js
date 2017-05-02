"use strict";

// @Version: 0.1.3

class MainMenu extends Menu {

	constructor(){

		super("MainMenu");

		this.singlePlayerButton = document.getElementById("MainMenuSinglePlayerButton");
		this.multiPlayerButton = document.getElementById("MainMenuMultiPlayerButton");
		this.optionsButton = document.getElementById("MainMenuOptionsButton");
		this.helpButton = document.getElementById("MainMenuHelpButton");
		this.creditsButton = document.getElementById("MainMenuCreditsButton");
		this.quitButton = document.getElementById("MainMenuQuitButton");

		this.singlePlayerButton.addEventListener("click",this.singlePlayerButtonClickHandler);
		this.multiPlayerButton.addEventListener("click",this.multiPlayerButtonClickHandler);
		this.optionsButton.addEventListener("click",this.optionsButtonClickHandler);
		this.helpButton.addEventListener("click",this.helpButtonClickHandler);
		this.creditsButton.addEventListener("click",this.creditsButtonClickHandler);
		this.quitButton.addEventListener("click",this.quitButtonClickHandler);

		this.selectedButton = undefined;
		this.selectButton(this.singlePlayerButton);
		window.addEventListener("enterKeyDown",this.enterKeyDownHandler.bind(this));
		window.addEventListener("upKeyDown",this.upKeyDownHandler.bind(this));
		window.addEventListener("leftKeyDown",this.upKeyDownHandler.bind(this));
		window.addEventListener("downKeyDown",this.downKeyDownHandler.bind(this));
		window.addEventListener("rightKeyDown",this.downKeyDownHandler.bind(this));
	}

	singlePlayerButtonClickHandler(){
		window.dispatchEvent(new Event("showSinglePlayerMenu"));
	}

	multiPlayerButtonClickHandler(){
		window.dispatchEvent(new Event("showMultiPlayerMenu"));
	}

	optionsButtonClickHandler(){
		window.dispatchEvent(new Event("showOptionsMenu"));
	}

	helpButtonClickHandler(){
		window.dispatchEvent(new Event("showHelpMenu"));
	}

	creditsButtonClickHandler(){
		window.dispatchEvent(new Event("showCreditsMenu"));
	}

	quitButtonClickHandler(){
		window.dispatchEvent(new Event("quit"));
	}

	selectButton(button){

		if(!button
		|| !(button instanceof HTMLButtonElement)
		) throw "MainMenu: selectButton(): InvalidArgumentsException";

		if(this.selectedButton) this.selectedButton.blur();

		this.selectedButton = button;
		this.selectedButton.focus();

	}

	enterKeyDownHandler(){

		if(this.selectedButton == this.singlePlayerButton) this.singlePlayerButtonClickHandler();
		else if(this.selectedButton == this.multiPlayerButton) this.multiPlayerButtonClickHandler();
		else if(this.selectedButton == this.optionsButton) this.optionsButtonClickHandler();
		else if(this.selectedButton == this.helpButton) this.helpButtonClickHandler();
		else if(this.selectedButton == this.creditsButton) this.creditsButtonClickHandler();
		else if(this.selectedButton == this.quitButton) this.quitButtonClickHandler();
	}

	upKeyDownHandler(){

		if(this.selectedButton == this.singlePlayerButton) this.selectButton(this.quitButton);
		else if(this.selectedButton == this.multiPlayerButton) this.selectButton(this.singlePlayerButton);
		else if(this.selectedButton == this.optionsButton) this.selectButton(this.multiPlayerButton);
		else if(this.selectedButton == this.helpButton) this.selectButton(this.optionsButton);
		else if(this.selectedButton == this.creditsButton) this.selectButton(this.helpButton);
		else if(this.selectedButton == this.quitButton) this.selectButton(this.creditsButton);
	}

	downKeyDownHandler(){

		if(this.selectedButton == this.singlePlayerButton) this.selectButton(this.multiPlayerButton);
		else if(this.selectedButton == this.multiPlayerButton) this.selectButton(this.optionsButton);
		else if(this.selectedButton == this.optionsButton) this.selectButton(this.helpButton);
		else if(this.selectedButton == this.helpButton) this.selectButton(this.creditsButton);
		else if(this.selectedButton == this.creditsButton) this.selectButton(this.quitButton);
		else if(this.selectedButton == this.quitButton) this.selectButton(this.singlePlayerButton);
	}

	static test(){
		console.log("TEST: MAIN MENU");
		let mainMenu = new MainMenu();
		console.log("MAIN MENU TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

