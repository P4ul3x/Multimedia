"use strict";

class Velocity extends Vector {

	constructor(x,y,living,game,priority=0,framesToLive=Number.POSITIVE_INFINITY){

		super(x,y,living,game,priority,framesToLive);
	}

	update(){

		super.update();

		let position = this.Living.getComponent("Position");
		
		if(!position) return;

		position.X += this.X;

		position.Y += this.Y;
	}
}

