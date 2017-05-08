"use strict";

class Position extends Vector {

	constructor(xValue,yValue,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(xValue,yValue,framesToLive);

		if(!(entity instanceof Entity)) throw "Position: constructor(): InvalidArgumentsException";

		this.entity = entity;
	}

	// @OVERRIDE
	update(){

		super.update();

		let velocity = this.entity.getComponent("Velocity");
		if(velocity){

			this.X += velocity.X;
			this.Y += velocity.Y;
		}
	}

	// @OVERRIDE
	get value(){

		return [this.x,this.y];
	}
}

