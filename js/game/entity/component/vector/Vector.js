"use strict";

class Vector extends Component {

	constructor(x,y,living,game,priority=0,framesToLive=Number.POSITIVE_INFINITY){

		super(living,game,priority,framesToLive);

		this.X = x;

		this.Y = y;
	}

	set X(x){

		if(typeof x !== "number") throw "Vector: set: X(): InvalidArgumentsException";

		this.x = x;
	}

	set Y(y){

		if(typeof y !== "number") throw "Vector: set: Y(): InvalidArgumentsException";

		this.y = y;
	}

	set Angle(angle){

		// TODO
	}

	set Intensity(angle){

		// TODO
	}

	get X(){

		return this.x;
	}

	get Y(){

		return this.y;
	}

	get Angle(){

		return Math.atan(this.Y / this.X) * 180 / Math.PI;
	}

	get Intensity(){

		return Math.sqrt(this.X * this.X + this.Y * this.Y);
	}
}

