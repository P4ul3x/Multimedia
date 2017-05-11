"use strict";

/*
	Define global variables
*/

window.GLOBAL = {
	OBJECTS:{},
	MOVEMENT_KEYS:{
		UP:"ArrowUp",
		RIGHT:"ArrowRight",
		DOWN:"ArrowDown",
		LEFT:"ArrowLeft"
	},
	KEYS:{
		ENTER:"Enter",
		BACK:"b"
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
	if(key == window.GLOBAL.MOVEMENT_KEYS.ENTER) window.dispatchEvent(new Event("enterKeyDown"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.BACK) window.dispatchEvent(new Event("backKeyDown"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.UP) window.dispatchEvent(new Event("upKeyDown"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.RIGHT) window.dispatchEvent(new Event("rightKeyDown"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.DOWN) window.dispatchEvent(new Event("downKeyDown"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.LEFT) window.dispatchEvent(new Event("leftKeyDown"));
}

function keyUpHandler(keyEvent){
	let key = keyEvent.key;
	if(key == window.GLOBAL.MOVEMENT_KEYS.ENTER) window.dispatchEvent(new Event("enterKeyUp"));
	if(key == window.GLOBAL.MOVEMENT_KEYS.BACK) window.dispatchEvent(new Event("backKeyUp"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.UP) window.dispatchEvent(new Event("upKeyUp"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.RIGHT) window.dispatchEvent(new Event("rightKeyUp"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.DOWN) window.dispatchEvent(new Event("downKeyUp"));
	else if(key == window.GLOBAL.MOVEMENT_KEYS.LEFT) window.dispatchEvent(new Event("leftKeyUp"));
}

