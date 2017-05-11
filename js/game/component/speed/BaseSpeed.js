"use strict";

class BaseSpeed extends Component{

	constructor(value,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(entity,framesToLive);

		if(typeof value !== "number" 
		|| value<0
		) throw "BaseSpeed: constructor(): InvalidArgumentsException";

		this._value = value;
	}

	// @OVERRIDE
	update(){

		super.update();
	}

	set value(value){

		if(typeof value !== "number"
		|| value<0
		) throw "BaseSpeed: constructor(): InvalidArgumentsException";

		this._value = value;
	}

	get value(){

		return this._value;
	}
}