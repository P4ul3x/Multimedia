"use strict";

// @Version: 0.1.0

/*
	An Entity is anything that has a solid shape
	and can be materialized ("pixalized") in some locations.
*/
class Entity {

	/*
		@identification: any comparable object
	*/
	constructor(identification){

		this.identification = identification;
		this.location = undefined;
	}

	/*
		Tells the entity to spawn in a certain location
		of a given context.
	*/
	spawn(context,location){

		if(!(context instanceof CanvasRenderingContext2D)
		|| !(location instanceof Location))
			throw "Entity: spawn(): InvalidArgumentsException";
	}

	/*
		updates this entities state
	*/
	update(){

	}

	static test(){
		console.log("TEST: ENTITY");
		console.log("ENTITY TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

