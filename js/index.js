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
		document.getElementById('VolumeControl').value = document.getElementById('music').volume;
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
		Map the keyboard events to more specific key events
	*/
	
	document.addEventListener("keydown",keyDownHandler);
	document.addEventListener("keyup",keyUpHandler);

	/*
		Start the application
	*/

	currentMenu = mainMenu;
	currentMenu.show();
}

function keyDownHandler(keyEvent){
	let key = keyEvent.key;
	if(key == window.GLOBAL.KEYS.ENTER) window.dispatchEvent(new Event("enterKeyDown"));
	else if(key == window.GLOBAL.KEYS.BACK) window.dispatchEvent(new Event("backKeyDown"));
	else if(key == window.GLOBAL.KEYS.UP) window.dispatchEvent(new Event("upKeyDown"));
	else if(key == window.GLOBAL.KEYS.RIGHT) window.dispatchEvent(new Event("rightKeyDown"));
	else if(key == window.GLOBAL.KEYS.DOWN) window.dispatchEvent(new Event("downKeyDown"));
	else if(key == window.GLOBAL.KEYS.LEFT) window.dispatchEvent(new Event("leftKeyDown"));
}

function keyUpHandler(keyEvent){
	let key = keyEvent.key;
	if(key == window.GLOBAL.KEYS.ENTER) window.dispatchEvent(new Event("enterKeyUp"));
	if(key == window.GLOBAL.KEYS.BACK) window.dispatchEvent(new Event("backKeyUp"));
	else if(key == window.GLOBAL.KEYS.UP) window.dispatchEvent(new Event("upKeyUp"));
	else if(key == window.GLOBAL.KEYS.RIGHT) window.dispatchEvent(new Event("rightKeyUp"));
	else if(key == window.GLOBAL.KEYS.DOWN) window.dispatchEvent(new Event("downKeyUp"));
	else if(key == window.GLOBAL.KEYS.LEFT) window.dispatchEvent(new Event("leftKeyUp"));
}

