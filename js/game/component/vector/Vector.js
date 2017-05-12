"use strict";

class Vector extends Component {

	constructor(xValue,yValue,entity,framesToLive=Number.POSITIVE_INFINITY){

		super(entity,framesToLive);

		if(typeof xValue !== "number"
		|| typeof yValue !== "number"
		) throw "Vector: constructor(): InvalidArgumentsException";

		this.xValue = xValue;
		this.yValue = yValue;
	}

	set X(xValue){

		if(typeof xValue !== "number") throw "Vector: set: X(): InvalidArgumentsException";

		this.xValue = xValue;
	}

	set Y(yValue){

		if(typeof yValue !== "number") throw "Vector: set: Y(): InvalidArgumentsException";

		this.yValue = yValue;
	}

	get X(){

		return this.xValue;
	}

	get Y(){

		return this.yValue;
	}

	get value(){
		
		return Math.sqrt(this.X*this.X+this.Y*this.Y);
	}

	get direction(){
		
		if(this.value == 0) return [];

		return [this.X/this.value, this.Y/this.value];
	}
}

