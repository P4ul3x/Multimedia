"use strict";

class MaxSpeed extends Component{

	constructor(entity,value,framesToLive=Number.POSITIVE_INFINITY){

		super(entity,framesToLive);

		if(typeof value !== "number" 
		|| value<0
		) throw "MaxSpeed: constructor(): InvalidArgumentsException";

		this.value = value;
	}

	// @OVERRIDE
	update(){

		super.update();
	}

	set value(value){

		if(typeof value !== "number"
		|| value<0
		) throw "MaxSpeed: constructor(): InvalidArgumentsException";

		this.value = value;
	}

	get value(){

		return this.value;
	}
}
