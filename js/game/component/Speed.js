"use strict";

// @Version: 0.1.0

class Speed extends Vector {

	constructor(entity,xValue,yValue){

		super(entity,xValue,yValue);

		this.identification = this.constructor.name;
	}

	/*
		@OVERRIDE
	*/
	update(){

		let acceleration = this.entity.getComponent("Acceleration");
		if(acceleration){
			this.xValue += acceleration.X();
			this.yValue += acceleration.Y();
		}
	}
}

