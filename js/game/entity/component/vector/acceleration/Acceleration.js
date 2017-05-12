"use strict";

class Acceleration extends Vector {

	constructor(x,y,living,game,priority=0,framesToLive=Number.POSITIVE_INFINITY){

		super(x,y,living,game,priority,framesToLive);
	}

	update(){

		super.update();

		let velocity = this.Living.getComponent("Velocity");

		if(!velocity) return;

		velocity.X += this.X;

		velocity.Y += this.Y;
	}
}

