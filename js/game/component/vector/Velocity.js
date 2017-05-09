"use strict";

class Velocity extends Vector {

	constructor(xValue,yValue,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(xValue,yValue,entity,framesToLive);
	}

	// @OVERRIDE
	update(){

		super.update();

		let acceleration = this.entity.getComponent("Acceleration");
		if(acceleration){

			this.X += acceleration.X;
			this.Y += acceleration.Y;
		}
	}
}

