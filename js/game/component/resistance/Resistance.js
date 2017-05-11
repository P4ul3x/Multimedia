"use strict";

class Resistance extends Component {

	constructor(value,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(entity,framesToLive);

		if(typeof value !== "number"
		|| value <= 0
		) throw "Resistance: constructor(): InvalidArgumentsException";

		this._value = value;
	}

	set value(value){

		if(typeof value !== "number"
		|| value < 0
		) throw "Resistance: setValue(): InvalidArgumentsException";

		this._value = value;
	}

	get value(){

		return this._value;
	}
}

