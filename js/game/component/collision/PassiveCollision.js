"use strict";

class PassiveCollision extends Collision {

	constructor(entity,framesToLive=Number.POSITIVE_INFINITY){

		super(framesToLive);

		if(!(entity instanceof Entity)) throw "PassiveCollision: constructor(): InvalidArgumentsException";

		this.entity = entity;
	}

	// @OVERRIDE
	update(){

		super.update();
	}
}

