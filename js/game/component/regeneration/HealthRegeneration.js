"use strict";

class HealthRegeneration extends Regeneration {

	constructor(entity,value){

		super(value);

		this.entity = entity;
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

