"use strict";

class Timer extends Component {

	constructor(component,entity,framesToLive){

		super(entity,framesToLive);

		if(!(component instanceof Component)) throw "Timer: constructor(): InvalidArgumentsException";

		this.component = component;
	}

	// @OVERRIDE
	update(){

		super.update();

		if(this.framesToLive <= 0){

			this.entity.addComponent(this.component);
		}
	}

	set component(component){

		if(!(component instanceof Component)) throw "Timer: setComponent(): InvalidArgumentsException";

		this.component = component;
	}

	get component(){

		return this.component;
	}
}

