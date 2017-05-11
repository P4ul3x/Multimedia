"use strict";

class MovementInput extends Input {

	constructor(entity,framesToLive=Number.POSITIVE_INFINITY){

		super(entity,framesToLive);

		this._movementKey = {};

		/*
			adds a key when down
		*/
		window.addEventListener("upKeyDown", 	function(){ this.movementKey = window.GLOBAL.MOVEMENT_KEYS.UP; 	  }.bind(this));
		window.addEventListener("rightKeyDown", function(){ this.movementKey = window.GLOBAL.MOVEMENT_KEYS.RIGHT; }.bind(this));
		window.addEventListener("downKeyDown", 	function(){ this.movementKey = window.GLOBAL.MOVEMENT_KEYS.DOWN;  }.bind(this));
		window.addEventListener("leftKeyDown", 	function(){ this.movementKey = window.GLOBAL.MOVEMENT_KEYS.LEFT;  }.bind(this));
		
		/*
			remove key when up
		*/

		window.addEventListener("upKeyUp",		function(){ delete this._movementKey[window.GLOBAL.MOVEMENT_KEYS.UP]; 	 }.bind(this));
		window.addEventListener("rightKeyUp",	function(){ delete this._movementKey[window.GLOBAL.MOVEMENT_KEYS.RIGHT]; }.bind(this));
		window.addEventListener("downKeyUp", 	function(){ delete this._movementKey[window.GLOBAL.MOVEMENT_KEYS.DOWN];  }.bind(this));
		window.addEventListener("leftKeyUp", 	function(){ delete this._movementKey[window.GLOBAL.MOVEMENT_KEYS.LEFT];  }.bind(this));
	}

	get movementKey(){

		let keys = Object.keys(this._movementKey);

		if(!keys) return "";

		return keys[keys.length-1];
	}

	set movementKey(key){

		if( typeof key !== "string") throw "VelocityInput: setMovementKey(): InvalidArgumentsException";

		this._movementKey[key] = "";
	}

}	

