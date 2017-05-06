"use strict";

class DamageResistance extends Resistance {

	constructor(entity,value){

		super(entity,value);
	}

	/*
		@OVERRIDE
	*/
	update(){

		let damage = this.entity.getComponent("Damage");
		if(damage){

			damage.subtract(this.value);
		}
	}
}

