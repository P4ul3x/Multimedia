"use strict";

/*
	Define global variables
*/

window.GLOBAL = {
	OBJECTS:{},
	MOVEMENTKEYS:{
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

