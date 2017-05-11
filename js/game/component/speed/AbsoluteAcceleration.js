"use strict";

class AbsoluteAcceleration extends Component{

	constructor(entity,value,framesToLive=Number.POSITIVE_INFINITY){

		super(entity,framesToLive);

		if(typeof value !== "number" 
		|| value<0
		) throw "AbsoluteAcceleration: constructor(): InvalidArgumentsException";

		this._value = value;
	}

	// @OVERRIDE
	update(){

		super.update();
	}

	set value(value){

		if(typeof value !== "number"
		|| value<0
		) throw "AbsoluteAcceleration: constructor(): InvalidArgumentsException";

		this._value = value;
	}

	get value(){

		return this._value;
	}
}
