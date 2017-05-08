"use strict";

class Component {

	constructor(framesToLive=Number.POSITIVE_INFINITY){

		if(framesToLive <= 0) throw "Component: constructor(): InvalidArgumentsException";

		this.identification = this.constructor.name;

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

