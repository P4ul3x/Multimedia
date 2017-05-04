"use strict";

/*
	Define global variables
*/

window.GLOBAL = {
	OBJECTS:{}
};

function nextIdentification(objectIdentification){
	
	let obj = window.GLOBAL.OBJECTS[objectIdentification];
	if(obj) window.GLOBAL.OBJECTS[objectIdentification]++;
	else window.GLOBAL.OBJECTS[objectIdentification] = 0;
	return window.GLOBAL.OBJECTS[objectIdentification];
}

