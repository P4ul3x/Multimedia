"use strict";

class Resistance extends Component {

	constructor(value,framesToLive=Number.MAX_SAFE_INTEGER){

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

