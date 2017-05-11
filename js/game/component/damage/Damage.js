"use strict";

class Damage extends Component {

	constructor(value,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(entity,framesToLive);

		if(typeof value !== "number"
		|| value <= 0
		) throw "Damage: constructor(): InvalidArgumentsException";

		this._value = value;
	}

	set value(value){

		if(typeof value !== "number"
		|| value<0
		) throw "Damage: constructor(): InvalidArgumentsException";

		this._value = value;
	}

	// @OVERRIDE
	get value(){

		return this._value;
	}
}

