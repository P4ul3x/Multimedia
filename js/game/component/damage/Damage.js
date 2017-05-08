"use strict";

class Damage extends Component {

	constructor(value,framesToLive=Number.MAX_SAFE_INTEGER){

		super(framesToLive);

		this.value = value;
	}

	// @OVERRIDE
	get value(){

		return this.value;
	}
}

