"use strict";

class Context extends Component {

	constructor(entity,framesToLive=Number.POSITIVE_INFINITY){

		super(framesToLive);

		if(!(entity instanceof Entity)) throw "Context: constructor(): InvalidArgumentsException";

		this.entity = entity;
	}

	// @OVERRIDE
	get value(){
		
		return this.entity.context;
	}
}

