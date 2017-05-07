"use strict";

class DamageResistance extends Resistance {

	constructor(entity,value){

		super(value);

		this.entity = entity;
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

