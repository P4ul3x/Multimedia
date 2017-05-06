"use strict";

class Heal extends Component {

	constructor(entity,value){

		super(entity);

		if(typeof value !== "number") throw "Context: constructor(): InvalidArgumentsException";

		this.value = value;

	}

	get value(){

		return this.value;
	}
}

