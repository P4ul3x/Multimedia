"use strict";

class AbsoluteAcceleration extends Commponent{

	constructor(entity,value,framesToLive=Number.POSITIVE_INFINITY){

		super(entity,framesToLive);

		if(typeof value !== "number" 
		|| value<0
		) throw "AbsoluteAcceleration: constructor(): InvalidArgumentsException";

		this.value = value;
	}

	// @OVERRIDE
	update(){

		super.update();
	}

	set value(value){

		if(typeof value !== "number"
		|| value<0
		) throw "AbsoluteAcceleration: constructor(): InvalidArgumentsException";

		this.value = value;
	}

	get value(){

		return this.value;
	}
}
