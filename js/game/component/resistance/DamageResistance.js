"use strict";

class DamageResistance extends Resistance {

	constructor(value,entity,framesToLive=Number.MAX_SAFE_INTEGER){

		super(value,framesToLive);

		if(!(entity instanceof Entity)) throw "DamageResistance: constructor(): InvalidArgumentsException";

		this.entity = entity;
	}
}

