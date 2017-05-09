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

	set entity(entity){

		if(!(entity instanceof Entity)) throw "Component: setEntity(): InvalidArgumentsException";

		this.entity = entity;
	}

	set framesToLive(framesToLive){

		if(typeof framesToLive !== "number"
		|| framesToLive <= 0
		) throw "Component: setFramesToLive(): InvalidArgumentsException";

		this.framesToLive = framesToLive;
	}

	get identification(){

		return this.identification;
	}

	get entity(){

		return this.entity;
	}

	get framesToLive(){

		return this.framesToLive;
	}
}

