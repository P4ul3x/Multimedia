"use strict";

/*
	@Abstract

	Components are entity attributes (Health, Mana, Speed, etc)
*/
class Component {

	constructor(framesToLive=Number.MAX_SAFE_INTEGER){

		if(framesToLive <= 0) throw "Component: constructor(): InvalidArgumentsException";

		this.identification = this.constructor.name;

		this.framesToLive = framesToLive;
	}

	update(){

		if(this.framesToLive !== Number.MAX_SAFE_INTEGER){

			this.framesToLive--;

			if(this.framesToLive <= 0){

				this.entity.removeComponent(this.identification);
			}
		}
	}

	get value(){

		return this.framesToLive;
	}
}

