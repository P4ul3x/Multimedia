"use strict";

class VelocityByInput extends Vector {

	constructor(xValue,yValue,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(xValue,yValue,entity,framesToLive);
	}

	// @OVERRIDE
	update(){

		super.update();

		let input = this.entity.getComponent("MovementInput");
		if(!input) return;

		let acceleration = this.entity.getComponent("AbsoluteAcceleration");
		if(acceleration) acceleration = acceleration.value;
		else acceleration = 0;

		let base = this.entity.getComponent("BaseSpeed");
		if(base) base = base.value;
		else base = 0;

		let max = this.entity.getComponent("MaxSpeed");
		if(max) max = max.value;

		let value;

		if(this.value>0){
			value = this.value+acceleration;
		}
		else{
			value = base+acceleration;
		}

		if(max) value = Math.max(max.value,value);

		switch(input.movementKey){
			case window.GLOBAL.MOVEMENT_KEYS.UP 	: this.X = 0;		this.Y = -value; 	break;
			case window.GLOBAL.MOVEMENT_KEYS.RIGHT	: this.X = value;  	this.Y = 0;			break;
 			case window.GLOBAL.MOVEMENT_KEYS.DOWN	: this.X = 0; 	   	this.Y = value;		break;
			case window.GLOBAL.MOVEMENT_KEYS.LEFT	: this.X = -value; 	this.Y = 0; 		break;

			default: this.X = 0; this.Y = 0;
		}

	}
}
