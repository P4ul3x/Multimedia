"use strict";

class Damage extends Component {

	constructor(value,framesToLive=Number.POSITIVE_INFINITY){

		super(framesToLive);

		this.value = value;
	}

	// @OVERRIDE
	get value(){

		return this.value;
	}
}

