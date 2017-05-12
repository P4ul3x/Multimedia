"use strict";

class Entity {

	constructor(game,framesToLive=Number.POSITIVE_INFINITY){

		this.Identification = this.constructor.name;

		this.Game = game;

		this.FramesToLive = framesToLive;
	}

	update(){

		this.FramesToLive--;
	}

	set Identification(identification){

		if(typeof identification !== "string") throw "Entity: set: Identification(): InvalidArgumentsException";

		this.identification = identification;
	}

	set Game(game){

		if(!(game instanceof Game)) throw "Entity: set: Game(): InvalidArgumentsException";

		this.game = game;
	}

	set FramesToLive(framesToLive){

		if(typeof framesToLive !== "number"
		|| framesToLive < 0
		) throw "Entity: set: FramesToLive(): InvalidArgumentsException";

		this.framesToLive = framesToLive;
	}

	get Identification(){

		return this.identification;
	}

	get Game(){

		return this.game;
	}

	get FramesToLive(){

		return this.framesToLive;
	}
}

