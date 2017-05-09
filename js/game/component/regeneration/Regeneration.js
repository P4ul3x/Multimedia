"use strict";

class Regeneration extends Component {

	constructor(value,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(entity,framesToLive);

		if(typeof value !== "number"
		|| value <= 0
		) throw "Regeneration: constructor(): InvalidArgumentsException";

		this.value = value;
	}

	set value(value){

		if(typeof value !== "number"
		|| value <= 0
		) throw "Regeneration: setValue(): InvalidArgumentsException";

		this.value = value;
	}

	get value(){

		return this.value;
	}
}

