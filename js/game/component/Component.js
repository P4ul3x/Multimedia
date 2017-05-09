"use strict";

class Component {

	constructor(entity,framesToLive=Number.POSITIVE_INFINITY){

		if(typeof framesToLive !== "number"
		|| framesToLive <= 0
		|| !(entity instanceof Entity)
		) throw "Component: constructor(): InvalidArgumentsException";

		this.identification = this.constructor.name;

		this.entity = entity;

		this.framesToLive = framesToLive;
	}

	update(){

		this.framesToLive--;

		if(this.framesToLive <= 0){

			this.entity.removeComponent(this.identification);
		}
	}

	get identification(){

		return this.identification;
	}

	get framesToLive(){

		return this.framesToLive;
	}
}

