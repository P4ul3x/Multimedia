"use strict";

/*
	@Abstract

	In this context, we assume a vector has always 2 dimensions.
*/
class Vector extends Component {

	/*
		@xValue: the x axis value of this vector
		@yValue: the y axis value of this vector
	*/
	constructor(xValue,yValue){

		super();

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

	/*
		@OVERRIDE

		Returns the module/intensity of this vector ( sqrt( x^2 + y^2 ) )
	*/
	get value(){
		
		return Math.sqrt(this.xValue*this.xValue+this.yValue*this.yValue);
	}
}

