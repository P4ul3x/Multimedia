"use strict";

class ActiveCollision extends Collision {

	constructor(entity,framesToLive=Number.POSITIVE_INFINITY){

		super(framesToLive);

		if(!(entity instanceof Entity)) throw "ActiveCollision: constructor(): InvalidArgumentsException";

		this.entity = entity;
	}

	// @OVERRIDE
	update(){

		super.update();
	}
}

