"use strict";

class Regeneration extends Component {

	constructor(value,framesToLive=Number.POSITIVE_INFINITY){

		super(framesToLive);

		if(typeof value !== "number"
		|| value <= 0
		) throw "Regeneration: constructor(): InvalidArgumentsException";

		this.value = value;
	}

	// @OVERRIDE
	get value(){

		return this.value;
	}
}

