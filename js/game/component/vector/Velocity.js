"use strict";

class Velocity extends Vector {

	constructor(entity,xValue,yValue){

		super(xValue,yValue);

		this.entity = entity;
	}

	/*
		@OVERRIDE
	*/
	update(){

		let acceleration = this.entity.getComponent("Acceleration");
		if(acceleration){
			this.xValue += acceleration.X;
			this.yValue += acceleration.Y;
		}
	}
}

