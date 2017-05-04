"use strict";

/*
	Define global variables
*/

window.GLOBAL = {
	KEYS:{
		UP:"ArrowUp",
		RIGHT:"ArrowRight",
		DOWN:"ArrowDown",
		LEFT:"ArrowLeft",
		ENTER:"Enter",
		BACK:"b"
	},
	OBJECTS:{

	}
};

function nextIdentification(objectName){
	
	let obj = window.GLOBAL.OBJECTS[objectName];
	if(obj) window.GLOBAL.OBJECTS[objectName]++;
	else window.GLOBAL.OBJECTS[objectName] = 0;
	return window.GLOBAL.OBJECTS[objectName];
}

