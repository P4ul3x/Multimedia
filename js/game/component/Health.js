"use strict";

// @Version: 0.1.0

class Health extends Component {

	constructor(entity,startingValue){

		super(entity);

		if(typeof startingValue !== "number") throw "Health: constructor(): InvalidArgumentsException";

		this.identification = this.constructor.name;

		this.startingHealth = startingHealth;
		this.currentHealth = startingHealth;
	}

	/*
		@OVERRIDE

		TODO
	*/
	update(){

		let damage = this.entity.getComponent("damage");
		if(damage) this.currentHealth = Math.max(0,this.currentHealth-damage.value());

		let heal = this.entity.getComponent("heal");
		if(heal) this.currentHealth = Math.max(this.startingHealth,this.currentHealth+heal.value());

		let revive = this.entity.getComponent("revive");
		if(revive) this.currentHealth = this.startingHealth;
	}

	/*
		@OVERRIDE
	*/
	get value(){
		return this.currentHealth;
	}
}

