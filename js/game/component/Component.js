"use strict";

/*
	@Abstract

	Components are entity attributes (Health, Mana, Speed, etc)
*/
class Component {

	constructor(entity,identification){

		if(!(entity instanceof Entity)) throw "Component: constructor(): InvalidArgumentsException";

		if(identification) this.identification = identification; 
		else this.identification = this.constructor.name;

		this.entity = entity;
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

