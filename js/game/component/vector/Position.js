"use strict";

/*
	A Position is a meaninfull way of saving
	two dimensional coordinates.
*/
class Position extends Vector {

	/*
		@xValue: the x-axis coordinate of the context
		@yValue: the y-axis coordinate of the context
	*/
	constructor(entity,xValue,yValue){

		super(entity,xValue,yValue);
	}

	/*
		@OVERRIDE
	*/
	update(){

		let velocity = this.entity.getComponent("Velocity");
		if(velocity){

			this.xValue += velocity.X;
			this.yValue += velocity.Y;
		}
	}

	/*
		@OVERRIDE

		Returns a vector with this positions' coordinates
	*/
	get value(){
		return [this.x,this.y];
	}

	static test(){
		console.log("TEST: Position");
		console.log("Position TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

