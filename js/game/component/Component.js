"use strict";

/*
	@Abstract

	Components are entity attributes (Health, Mana, Speed, etc)
*/
class Component {

	constructor(){

		this.identification = this.constructor.name;
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
}

