"use strict";

/*
	An Engine is responsible for keeping entities updated.
	It has it's own way of working assynchronously to reach this goal.
*/
class Engine extends Entity {

	constructor(){

		super();

		this.entities = {};
		this.fuel = 0;
	}

	/*
		Adds a new entity for the engine to update
		@entity: the new Entity object to be added
	*/
	addEntity(entity){

		if(!(entity instanceof Entity)) throw "Engine: addEntity(): InvalidArgumentsException";

		this.entities[entity.identification] = entity;
	}

	/*
		Removes an entity from this engine collection of entities.
		The removed entity will stop being updated by this engine.
	*/
	removeEntity(entityIdentification){

		delete this.entities[entityIdentification];
	}

	/*
		Tells the engine to start updating his entities
	*/
	start(){

		this.update();

		for(let entityIdentification in this.entities)
			this.entities[entityIdentification].update();

		this.fuel = window.requestAnimationFrame(this.start.bind(this));
	}

	/*
		Tells the engine to stop updating his entities
	*/
	stop(){

		window.cancelAnimationFrame(this.fuel);
	}
}

