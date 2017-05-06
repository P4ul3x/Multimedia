"use strict";

/*
	Define global variables
*/

window.GLOBAL = {
	OBJECTS:{}
};

(
	function(){
		window.addEventListener("load",function(){
			window.GLOBAL.operationContext = document.getElementById("OperationCanvas").getContext("2d");
		});
	}()
);

function nextIdentification(objectIdentification){
	
	let obj = window.GLOBAL.OBJECTS[objectIdentification];
	if(obj!==undefined) window.GLOBAL.OBJECTS[objectIdentification]++;
	else window.GLOBAL.OBJECTS[objectIdentification] = 0;
	return window.GLOBAL.OBJECTS[objectIdentification];
}

