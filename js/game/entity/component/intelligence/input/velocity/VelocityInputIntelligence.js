"use strict";

class VelocityInputIntelligence extends InputIntelligence {

	constructor(living,game,priority=0,framesToLive=Number.POSITIVE_INFINITY){

		super(living,game,priority,framesToLive);

		this.movementKey = {};

		/*
			adds a key when down
		*/
		window.addEventListener("upKeyDown", 	function(){ this.MovementKey = window.GLOBAL.MOVEMENT_KEYS.UP; 	  }.bind(this));
		window.addEventListener("rightKeyDown", function(){ this.MovementKey = window.GLOBAL.MOVEMENT_KEYS.RIGHT; }.bind(this));
		window.addEventListener("downKeyDown", 	function(){ this.MovementKey = window.GLOBAL.MOVEMENT_KEYS.DOWN;  }.bind(this));
		window.addEventListener("leftKeyDown", 	function(){ this.MovementKey = window.GLOBAL.MOVEMENT_KEYS.LEFT;  }.bind(this));
		
		/*
			remove key when up
		*/
		window.addEventListener("upKeyUp",		function(){ delete this.movementKey[window.GLOBAL.MOVEMENT_KEYS.UP]; 	}.bind(this));
		window.addEventListener("rightKeyUp",	function(){ delete this.movementKey[window.GLOBAL.MOVEMENT_KEYS.RIGHT]; }.bind(this));
		window.addEventListener("downKeyUp", 	function(){ delete this.movementKey[window.GLOBAL.MOVEMENT_KEYS.DOWN];  }.bind(this));
		window.addEventListener("leftKeyUp", 	function(){ delete this.movementKey[window.GLOBAL.MOVEMENT_KEYS.LEFT];  }.bind(this));
	}

	update(){

		super.update();

		let velocity = this.Living.getComponent("Velocity");

		if(!velocity) return;

		let key = this.MovementKey;

		let keys = window.GLOBAL.MOVEMENT_KEYS;

		switch(key){

			case keys.UP:  	 velocity.X = 0 ; 	velocity.Y = -3 ; break;
			case keys.RIGHT: velocity.X = 3 ; 	velocity.Y = 0 ; break;
			case keys.DOWN:  velocity.X = 0 ; 	velocity.Y = 3; break;
			case keys.LEFT:  velocity.X = -3; 	velocity.Y = 0 ; break;

			default: velocity.X = 0 ; velocity.Y = 0;

		}
	}

	set MovementKey(key){

		if( typeof key !== "string") throw "VelocityInput: setMovementKey(): InvalidArgumentsException";

		this.movementKey[key] = "";
	}

	get MovementKey(){

		let keys = Object.keys(this.movementKey);

		if(!keys) return "";

		return keys[keys.length-1];
	}
}

