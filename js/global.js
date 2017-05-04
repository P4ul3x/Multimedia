"use strict";

/*
	Define global variables
*/

window.GLOBAL = {
	OBJECTS:{}
};

function nextIdentification(objectName){
	
	let obj = window.GLOBAL.OBJECTS[objectName];
	if(obj) window.GLOBAL.OBJECTS[objectName]++;
	else window.GLOBAL.OBJECTS[objectName] = 0;
	return window.GLOBAL.OBJECTS[objectName];
}

