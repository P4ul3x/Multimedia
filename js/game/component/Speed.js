"use strict";

class Speed extends Vector {

	constructor(entity,xValue,yValue){

		super(entity,xValue,yValue);
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

