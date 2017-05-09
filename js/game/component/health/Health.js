"use strict";

class Health extends Component {

	constructor(value,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(entity,framesToLive);

		if(typeof value !== "number"
		|| value < 0
		) throw "Health: constructor(): InvalidArgumentsException";

		this.value = value;
	}

	// @OVERRIDE
	update(){

		super.update();

		let healthRegeneration = this.entity.getComponent("HealthRegeneration");
		if(healthRegeneration){

			this.value += healthRegeneration.value;
		}
	}

	set value(value){

		if(typeof value !== "number"
		|| value < 0
		) throw "Health: setValue(): InvalidArgumentsException";

		this.value = value;
	}

	get value(){

		return this.value;
	}
}

