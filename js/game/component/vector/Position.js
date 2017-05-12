"use strict";

class Position extends Vector {

	constructor(xValue,yValue,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(xValue,yValue,entity,framesToLive);
	}

	// @OVERRIDE
	update(){

		super.update();

		let velocity;

		if((velocity = this.entity.getComponent("VelocityByInput"))
		|| (velocity = this.entity.getComponent("Velocity"))
		){			
			this.X += velocity.X;
			this.Y += velocity.Y;
		}

	}

	get Value(){

		return 0;
	}

	get direction(){

		return [];
	}

}

