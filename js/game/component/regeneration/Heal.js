"use strict";

class Heal extends Component{

	constructor(entity,heal){

		super(entity);

		if(typeof heal !== "number") throw "Context: constructor(): InvalidArgumentsException";

		this.heal = heal;

	}

	get value(){

		return this.heal;
	}
}