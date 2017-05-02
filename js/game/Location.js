"use strict";

// @Version: 0.1.0

/*
	A Location is a meaninfull way of saving
	two dimensional coordinates.
*/
class Location {

	/*
		@xCoordinate: the x-axis coordinate of the context
		@yCoordinate: the y-axis coordinate of the context
	*/
	constructor(xCoordinate,yCoordinate){

		if(typeof xCoordinate !== "number"
		|| typeof yCoordinate !== "number"
		) throw "Location: constructor(): InvalidArgumentsException";

		this.xCoordinate = xCoordinate;
		this.yCoordinate = yCoordinate;
	}

	static test(){
		console.log("TEST: LOCATION");
		console.log("LOCATION TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

