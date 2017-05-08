"use strict";

class Velocity extends Vector {

	constructor(xValue,yValue,entity,framesToLive=Number.MAX_SAFE_INTEGER){

		super(xValue,yValue,framesToLive);

		if(!(entity instanceof Entity)) throw "Velocity: constructor(): InvalidArgumentsException";

		this.entity = entity;
	}
}

