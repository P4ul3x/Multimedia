"use strict";

class Resistance extends Component {

	constructor(value,framesToLive=Number.POSITIVE_INFINITY){

		super(framesToLive);

		if(typeof value !== "number"
		|| value <= 0
		) throw "Resistance: constructor(): InvalidArgumentsException";

		this.value = value;
	}

	// @OVERRIDE
	get value(){

		return this.value;
	}
}

