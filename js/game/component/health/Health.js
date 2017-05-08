"use strict";

class Health extends Component {

	constructor(value,framesToLive=Number.MAX_SAFE_INTEGER){

		super(framesToLive);

		if(typeof value !== "number"
		|| value < 0
		) throw "Health: constructor(): InvalidArgumentsException";

		this.value = value;
	}

	// @OVERRIDE
	get value(){

		return this.currentHealth;
	}
}

