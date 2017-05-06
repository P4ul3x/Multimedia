"use strict";

class GameEvent extends Event {

	constructor(sender,message){

		super(message);

		this.sender = sender;
	}
}

