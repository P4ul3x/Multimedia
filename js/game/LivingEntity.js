"use strict";

// @Version: 0.1.0

/*
	A LivingEntity is an Entity which has a health status.
*/
class LivingEntity extends Entity {

	constructor(identification,startingHealth){

		super(identification);

		this.startingHealth = startingHealth;
		this.currentHealth = startingHealth;
	}

	// @OVERRIDE
	update(){

	}

	static test(){
		console.log("TEST: LIVING ENTITY");
		console.log("LIVING ENTITY TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

