"use strict";

class HealthDamage extends Damage {

	constructor(entity,value){

		super(entity,value);
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

