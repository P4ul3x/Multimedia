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

