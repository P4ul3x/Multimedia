"use strict";

class DamageResistance extends Resistance {

	constructor(value,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(value,framesToLive);

		if(!(entity instanceof Entity)) throw "DamageResistance: constructor(): InvalidArgumentsException";

		this.entity = entity;
	}
}

