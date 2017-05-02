"use strict";

// @Version: 0.1.0

/*
	An Engine is responsible for keeping entities updated.
	It has it's own way of working assynchronously to reach this goal.
*/
class Engine {

	/*
		@entities: Collection of Entity objects to iterate
	*/
	constructor(){

		this.entities = {};
		this.fuel = 0;
	}

	/*
		Adds a new entity for the engine to update

		@entity: the new Entity object to be added
	*/
	addEntity(entity){

		if(!(entity instanceof Entity))
			throw "Engine: addEntity(): InvalidArgumentsException";

		this.entities[entity.identification] = entity;
	}

	removeEntity(entityIdentification){

		delete this.entities[entityIdentification];
	}

	/*
		Tells the engine to start updating his entities
	*/
	start(){
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

	static test(){
		let done = function(){window.dispatchEvent(new Event("done"));};
		console.log("TEST: ENGINE");
		try{
			var engine = new Engine();

			engine.addEntity(new Entity("Player"));
			engine.addEntity(new Entity("Monster"));
			engine.removeEntity("Player");

			window.setTimeout(
				function(){
					engine.stop();
					console.log("ENGINE TEST SUCCEEDED");
					done();
				}
			,3000);
			
			engine.start();
		}
		catch(error){
			console.log("ENGINE TEST FAILED: " + error);
			done();
		}
	}
}

