"use strict";

/*
	Define global variables
*/

window.GLOBAL = {
	OBJECTS:{},
	MOVEMENT_KEYS:{
		UP:		"ArrowUp",
		RIGHT: 	"ArrowRight",
		DOWN: 	"ArrowDown",
		LEFT: 	"ArrowLeft"
	},
	ATTACK_KEYS:{
		BASIC: 	  "q",
		THROW: 	  "w",
		SPECIAL:  "e",
		ULTIMATE: "r",
	},
	KEYS:{
		ENTER: 	"Enter",
		BACK: 	"b"
	}
};

(
	function(){

		window.addEventListener("load",function(){
			
			/*
				Map the keyboard events to more specific key events
			*/
			document.addEventListener("keydown",keyDownHandler);
			document.addEventListener("keyup",keyUpHandler);

			window.GLOBAL.operationContext = document.getElementById("OperationCanvas").getContext("2d");
		});

	}()
);

/*
	TODO:
		reuse identifications
		maximum number of identifications
*/
function nextIdentification(objectIdentification){
	
	let obj = window.GLOBAL.OBJECTS[objectIdentification];
	if(obj!==undefined) window.GLOBAL.OBJECTS[objectIdentification]++;
	else window.GLOBAL.OBJECTS[objectIdentification] = 0;
	return window.GLOBAL.OBJECTS[objectIdentification];
}

function keyDownHandler(keyEvent){
	let key = keyEvent.key; 
	if(key == window.GLOBAL.KEYS.ENTER) window.dispatchEvent(new Event("enterKeyDown"));
	else if(key == window.GLOBAL.KEYS.BACK) window.dispatchEvent(new Event("backKeyDown"));
	
	else if(key == window.GLOBAL.MOVEMENT_KEYS.UP) 		window.dispatchEvent(new Event("upKeyDown"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.RIGHT)	window.dispatchEvent(new Event("rightKeyDown"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.DOWN) 	window.dispatchEvent(new Event("downKeyDown"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.LEFT) 	window.dispatchEvent(new Event("leftKeyDown"));
	
	else if(key == window.GLOBAL.ATTACK_KEYS.BASIC) 	window.dispatchEvent(new Event("basicKeyDown"));
	else if(key == window.GLOBAL.ATTACK_KEYS.THROW) 	window.dispatchEvent(new Event("throwKeyDown"));
	else if(key == window.GLOBAL.ATTACK_KEYS.SPECIAL) 	window.dispatchEvent(new Event("specialKeyDown"));
	else if(key == window.GLOBAL.ATTACK_KEYS.ULTIMATE) 	window.dispatchEvent(new Event("ultimateKeyDown"));

}

function keyUpHandler(keyEvent){
	let key = keyEvent.key;
	if(key == window.GLOBAL.MOVEMENT_KEYS.ENTER) window.dispatchEvent(new Event("enterKeyUp"));
	if(key == window.GLOBAL.MOVEMENT_KEYS.BACK) window.dispatchEvent(new Event("backKeyUp"));
	
	else if(key == window.GLOBAL.MOVEMENT_KEYS.UP) 		window.dispatchEvent(new Event("upKeyUp"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.RIGHT) 	window.dispatchEvent(new Event("rightKeyUp"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.DOWN) 	window.dispatchEvent(new Event("downKeyUp"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.LEFT)	 window.dispatchEvent(new Event("leftKeyUp"));

	else if(key == window.GLOBAL.ATTACK_KEYS.BASIC) 	window.dispatchEvent(new Event("basicKeyUp"));
	else if(key == window.GLOBAL.ATTACK_KEYS.THROW) 	window.dispatchEvent(new Event("throwKeyUp"));
	else if(key == window.GLOBAL.ATTACK_KEYS.SPECIAL) 	window.dispatchEvent(new Event("specialKeyUp"));
	else if(key == window.GLOBAL.ATTACK_KEYS.ULTIMATE) 	window.dispatchEvent(new Event("ultimateKeyUp"));

}

