"use strict";

class MovementInput extends Input {

	constructor(entity,framesToLive=Number.POSITIVE_INFINITY){

		super(entity,framesToLive);

		this.movementKey = "";

		/*
			adds a key when down
		*/
		window.addEventListener("upKeyDown", 	function(){ this.movementKey = window.GLOBAL.MOVEMENTKEYS.UP; 	 }.bind(this));
		window.addEventListener("rightKeyDown", function(){ this.movementKey = window.GLOBAL.MOVEMENTKEYS.RIGHT; }.bind(this));
		window.addEventListener("downKeyDown", 	function(){ this.movementKey = window.GLOBAL.MOVEMENTKEYS.DOWN;  }.bind(this));
		window.addEventListener("leftKeyDown", 	function(){ this.movementKey = window.GLOBAL.MOVEMENTKEYS.LEFT;  }.bind(this));
		
		/*
			remove key when up
		*/
		window.addEventListener("upKeyUp",		function(){ if (this.movementKey == window.GLOBAL.MOVEMENTKEYS.UP) 		this.movementKey = ""; }.bind(this));
		window.addEventListener("rightKeyUp", 	function(){ if (this.movementKey == window.GLOBAL.MOVEMENTKEYS.RIGHT) 	this.movementKey = ""; }.bind(this));
		window.addEventListener("downKeyUp", 	function(){ if (this.movementKey == window.GLOBAL.MOVEMENTKEYS.DOWN) 	this.movementKey = ""; }.bind(this));
		window.addEventListener("leftKeyUp", 	function(){ if (this.movementKey == window.GLOBAL.MOVEMENTKEYS.LEFT) 	this.movementKey = ""; }.bind(this));

	}

	get movementKey(){
		return this.movementKey;
	}

	set movementKey(key){

		if(!(typeof key !== "string")) throw "VelocityInput: setMovementKey(): InvalidArgumentsException";

		this.movementKey = key;
	}

}	

