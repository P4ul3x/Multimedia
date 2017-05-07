"use strict";

class Damage extends Component {

	constructor(value){

		super();

		this.value = value;
	}

	add(value){

		if(typeof value !== "number") throw "Damage: add(): InvalidArgumentsException";

		this.value += value;
	}

	subtract(value){

		if(typeof value !== "number") throw "Damage: subtract(): InvalidArgumentsException";

		this.value = Math.max(0,this.value-value);
	}

	/*
		@OVERRIDE
	*/
	get value(){

		return this.value;
	}
}

