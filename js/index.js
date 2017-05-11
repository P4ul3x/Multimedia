"use strict";

(
	function(){
		window.addEventListener("load",main);
	}()
);

function main(){

	let currentMenu;

	/*
		Create menus
	*/

	let	mainMenu = new MainMenu(),
		singlePlayerMenu = new SinglePlayerMenu(),
		multiPlayerMenu = new MultiPlayerMenu(),
		optionsMenu = new OptionsMenu(),
		helpMenu = new HelpMenu(),
		creditsMenu = new CreditsMenu(),
		gameMenu = new GameMenu(),
		gamePauseMenu = new GamePauseMenu();

	/*
		Switch between menus
	*/

	window.addEventListener("showMainMenu",function(){
		currentMenu.hide();
		currentMenu = mainMenu;
		currentMenu.show();
	});

	window.addEventListener("showSinglePlayerMenu",function(){
		currentMenu.hide();
		currentMenu = singlePlayerMenu;
		currentMenu.show();
	});

	window.addEventListener("showMultiPlayerMenu",function(){
		currentMenu.hide();
		currentMenu = multiPlayerMenu;
		currentMenu.show();
	});

	window.addEventListener("showOptionsMenu",function(){
		currentMenu.hide();
		currentMenu = optionsMenu;
		currentMenu.show();
	});

	window.addEventListener("showHelpMenu",function(){
		currentMenu.hide();
		currentMenu = helpMenu;
		currentMenu.show();
	});

	window.addEventListener("showCreditsMenu",function(){
		currentMenu.hide();
		currentMenu = creditsMenu;
		currentMenu.show();
	});

	window.addEventListener("showGameMenu",function(){
		currentMenu.hide();
		currentMenu = gameMenu;
		currentMenu.show();
	});

	window.addEventListener("showGamePauseMenu",function(){
		currentMenu.hide();
		currentMenu = gamePauseMenu;
		currentMenu.show();
	});

	window.addEventListener("quit",function(){
		window.close();
	});

	/*
		Start the application
	*/

	currentMenu = mainMenu;
	currentMenu.show();
}


