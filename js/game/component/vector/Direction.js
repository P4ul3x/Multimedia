"use strict";

class Direction extends Vector {

	constructor(xValue,yValue,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(xValue,yValue,entity,framesToLive);
	}

	// @OVERRIDE
	update(){

		super.update();

		let velocity;
		if(
		 	(velocity = this.entity.getComponent("VelocityByInput")
			|| (velocity = this.entity.getComponent("Velocity"))
			)
		&& velocity.value != 0
		){		
			this.X = velocity.direction[0];
			this.Y = velocity.direction[1];
		}
	}

	get Value(){

		return 1;
	}

	get direction(){

		return [this.X,this.Y];
	}

}
