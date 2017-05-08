"use strict";

class Vector extends Component {

	constructor(xValue,yValue,framesToLive=Number.MAX_SAFE_INTEGER){

		super(framesToLive);

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

	// @OVERRIDE
	get value(){
		
		return Math.sqrt(this.xValue*this.xValue+this.yValue*this.yValue);
	}
}

