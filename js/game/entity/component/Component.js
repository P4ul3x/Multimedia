"use strict";

class Component extends Entity {

	constructor(living,game,priority=0,framesToLive=Number.POSITIVE_INFINITY){

		super(game,framesToLive);

		this.Priority = priority;

		this.Living = living;

		this.Living.addComponent(this);
	}

	update(){

		super.update();

		if(this.FramesToLive <= 0){

			this.Living.removeComponent(this);
		}
	}

	set Priority(priority){

		if(typeof priority !== "number"
		|| priority < 0
		) throw "Component: set: Priority(): InvalidArgumentsException";

		this.priority = priority;
	}

	set Living(living){

		if(!(living instanceof Living)) throw "Component: set: Living(): InvalidArgumentsException";

		this.living = living;
	}

	get Priority(){

		return this.priority;
	}

	get Living(){

		return this.living;
	}
}

