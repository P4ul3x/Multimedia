"use strict";

class Attack extends GameEntity{

	constructor(game,entity){

		super(game);

		if(!(entity instanceof GameEntity)) "Attack: constructor(): InvalidArgumentsException";

		this._entity = entity;

	}

	get gameEntity(){

		return this._entity;
	}

}