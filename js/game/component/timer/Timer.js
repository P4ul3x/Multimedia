"use strict";

class Timer extends Component {

	constructor(entity,component,framesToLive){

		super(framesToLive);

		if(!(entity instanceof Entity)
		|| !(component instanceof Component)
		) throw "Timer: constructor(): InvalidArgumentsException";

		this.entity = entity;
		this.component = component;
	}

	// @OVERRIDE
	update(){

		super.update();

		if(this.framesToLive <= 0){

			this.entity.addComponent(this.component);
		}
	}
}

