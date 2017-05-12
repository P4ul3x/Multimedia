"use strict";

class Stat extends Component {

	constructor(value,living,game,priority=0,framesToLive=Number.POSITIVE_INFINITY){

		super(living,game,priority,framesToLive);

		this.Value = value;
	}

	update(){

		super.update();

		if(this.Value <= 0){

			this.Living.removeComponent(this);
		}
	}

	set Value(value){

		if(typeof value !== "number") throw "Stat: set: Value(): InvalidArgumentsException";

		this.value = value;
	}

	get Value(){

		return this.value;
	}
}

