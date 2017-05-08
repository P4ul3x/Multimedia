"use strict";

class Position extends Vector {

	constructor(xValue,yValue,entity,framesToLive=Number.MAX_SAFE_INTEGER){

		super(xValue,yValue,framesToLive);

		if(!(entity instanceof Entity)) throw "Position: constructor(): InvalidArgumentsException";

		this.entity = entity;
	}

	// @OVERRIDE
	get value(){

		return [this.x,this.y];
	}
}

