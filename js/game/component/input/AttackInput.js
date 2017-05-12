"use strict";

class AttackInput extends Input{

	constructor(entity,framesToLive=Number.POSITIVE_INFINITY){

		super(entity,framesToLive);

		this._attackKey = {};

		/*
			adds a key when down
		*/
		window.addEventListener("basicKeyDown", 	function(){ this.attackKey = window.GLOBAL.ATTACK_KEYS.BASIC; 	 }.bind(this));
		window.addEventListener("throwKeyDown", 	function(){ this.attackKey = window.GLOBAL.ATTACK_KEYS.THROW; 	 }.bind(this));
		window.addEventListener("specialKeyDown", 	function(){ this.attackKey = window.GLOBAL.ATTACK_KEYS.SPECIAL;  }.bind(this));
		window.addEventListener("ultimateKeyDown", 	function(){ this.attackKey = window.GLOBAL.ATTACK_KEYS.ULTIMATE; }.bind(this));

		/*
			remove key when up
		*/
		window.addEventListener("basicKeyUp", 		function(){ delete this._attackKey[window.GLOBAL.ATTACK_KEYS.BASIC];		}.bind(this));
		window.addEventListener("throwKeyUp", 		function(){ delete this._attackKey[window.GLOBAL.ATTACK_KEYS.THROW];		}.bind(this));
		window.addEventListener("specialKeyUp", 	function(){ delete this._attackKey[window.GLOBAL.ATTACK_KEYS.SPECIAL];  	}.bind(this));
		window.addEventListener("ultimateKeyUp", 	function(){ delete this._attackKey[window.GLOBAL.ATTACK_KEYS.ULTIMATE]; 	}.bind(this));
				
	}

	get attackKey(){

		let keys = Object.keys(this._attackKey);

		if(!keys) return "";

		return keys[keys.length-1];
	}

	set attackKey(key){

		if( typeof key !== "string") throw "VelocityInput: setMovementKey(): InvalidArgumentsException";

		this._attackKey[key] = "";
	}
} 
