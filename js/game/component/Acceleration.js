"use strict";

class Acceleration extends Vector {

	constructor(entity,xValue,yValue){

		super(entity,xValue,yValue);

		this.identification = this.constructor.name;
	}
}
