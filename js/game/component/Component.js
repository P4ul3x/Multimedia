"use strict";

class Component {

	constructor(entity, framesToLive=Number.POSITIVE_INFINITY){

		if(typeof framesToLive !== "number"
		|| framesToLive <= 0
		|| !(entity instanceof GameEntity)
		) throw "Component: constructor(): InvalidArgumentsException";

		this._identification = this.constructor.name;

		this._entity = entity;

		this._framesToLive = framesToLive;
	}

	update(){

		this.framesToLive--;

		if(this.framesToLive <= 0){

			this.entity.removeComponent(this.identification);
		}
	}

	set identification(identification){

		this._identification = identification;
	}

	set entity(entity){

		if(!(entity instanceof GameEntity)) throw "Component: setEntity(): InvalidArgumentsException";

		this._entity = entity;
	}

	set framesToLive(framesToLive){

		if(typeof framesToLive !== "number"
		|| framesToLive <= 0
		) throw "Component: setFramesToLive(): InvalidArgumentsException";

		this._framesToLive = framesToLive;
	}

	get identification(){

		return this._identification;
	}

	get entity(){

		return this._entity;
	}

	get framesToLive(){

		return this._framesToLive;
	}
}

