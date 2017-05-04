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

		if(!identification) throw "Component: constructor(): InvalidArgumentsException";

		this.identification = identification;
	}

	/*
		Abstract method to be implemented by subclasses
	*/
	update(){

	}

	/*
		Abstract method to be implemented by subclasses
	*/
	get value(){

	}

	static test(){
		console.log("TEST: COMPONENT");
		console.log("COMPONENT TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

