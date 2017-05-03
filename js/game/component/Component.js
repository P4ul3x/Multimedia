"use strict";

// @Version: 0.1.0

/*
	Components are entity attributes (Health, Mana, Speed, etc)
*/
class Component {

	/*
		@identification: any comparable object
	*/
	constructor(identification){

		if(!identification)
			throw "Component: constructor(): InvalidArgumentsException";

		this.identification = identification;
		this.data;
	}

	update(){

	}

	static test(){
		console.log("TEST: COMPONENT");
		console.log("COMPONENT TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

