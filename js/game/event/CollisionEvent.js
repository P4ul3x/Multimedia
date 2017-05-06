"use strict";

class CollisionEvent extends Event {

	constructor(sender,message){

		super(message);

		this.sender = sender;
	}
}

