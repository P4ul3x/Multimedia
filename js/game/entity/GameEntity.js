"use strict";

class GameEntity extends Entity {

	constructor(game){

		super();

		if(!(game instanceof Game)) throw "GameEntity: constructor(): InvalidArgumentsException";

		this._game = game;

		this.components = {};
	}

	set game(game){

		if(!(game instanceof Game)) throw "GameEntity: setGame(): InvalidArgumentsException";

		this._game = game;
	}

	get game(){

		return this._game;
	}

	/*
		Adds a components to this entity.
		If an entity already has a component of the specified type,
		this method will override that component.

		@component: the component to be added
	*/
	addComponents(){

		let argument;

		for (let i = 0; i < arguments.length; ++i){
			console.log(1);
			if(!(arguments[i] instanceof Component)) throw "Entity: addComponent(): InvalidArgumentsException";

			this.components[arguments[i].identification] = arguments[i];
		}
	}

	/*
		Removes a component from this entity

		@componentIdentification: the components' identification
	*/
	removeComponent(componentIdentification){

		delete this.components[componentIdentification];
	}

	/*
		Returns a component with the given identification from this entity

		@componentIdentification: the components' identification
	*/
	getComponent(componentIdentification){

		return this.components[componentIdentification];
	}

	/*
		updates this entities components
	*/
	update(){
		
		for(let componentIdentification in this.components)
			this.components[componentIdentification].update();
	}

}

