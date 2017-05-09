"use strict";

class GameEntity extends Entity {

	constructor(game){

		super();

		if(!(game instanceof Game)) throw "GameEntity: constructor(): InvalidArgumentsException";

		this.game = game;
	}

	set game(game){

		if(!(game instanceof Game)) throw "GameEntity: setGame(): InvalidArgumentsException";

		this.game = game;
	}

	get game(){

		return this.game;
	}
}

