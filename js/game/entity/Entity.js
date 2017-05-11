"use strict";

/*
	An Entity is anything identifiable.
*/
class Entity {

	constructor(){

		this._identification = this.constructor.name + nextIdentification(this.constructor.name);

	}

	set identification(identification){

		this._identification = identification;
	}

	get identification(){

		return this._identification;
	}

}

