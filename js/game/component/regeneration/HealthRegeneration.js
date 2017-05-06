"use strict";

class HealthRegeneration extends Regeneration {

	constructor(entity,value){

		super(entity,value);
	}

	/*
		@OVERRIDE
	*/
	update(){

		let health = this.entity.getComponent("Health");
		if(health){

			health.add(this.value);
		}
	}
}

