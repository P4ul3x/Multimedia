"use strict";

class Position extends Vector {

	constructor(xValue,yValue,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(xValue,yValue,entity,framesToLive);
	}

	// @OVERRIDE
	update(){

		super.update();

		let velocity = this.entity.getComponent("VelocityByInput");
		
		if(!velocity) velocity = this.entity.getComponent("Velocity");
		
		if(velocity){

			this.X += velocity.X;
			this.Y += velocity.Y;
		}
	}
}

