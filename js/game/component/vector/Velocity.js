"use strict";

class Velocity extends Vector {

	constructor(xValue,yValue,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(xValue,yValue,framesToLive);

		if(!(entity instanceof Entity)) throw "Velocity: constructor(): InvalidArgumentsException";

		this.entity = entity;
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

