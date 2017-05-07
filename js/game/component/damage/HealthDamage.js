"use strict";

class HealthDamage extends Damage {

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

			health.subtract(this.value);
		}
	}
}

