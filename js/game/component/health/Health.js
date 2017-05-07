"use strict";

class Health extends Component {

	constructor(entity,startingValue){

		super();

		if(typeof startingValue !== "number") throw "Health: constructor(): InvalidArgumentsException";

		this.entity = entity;
		this.startingHealth = startingHealth;
		this.currentHealth = startingHealth;
	}

	add(value){

		if(typeof value !== "number") throw "Health: add(): InvalidArgumentsException";

		this.currentHealth += value;
	}

	subtract(value){

		if(typeof value !== "number") throw "Health: remove(): InvalidArgumentsException";

		this.currentHealth -= value;
	}

	/*
		@OVERRIDE

		TODO
	*/
	update(){

		let damage = this.entity.getComponent("Damage");
		if(damage){

			this.currentHealth = Math.max(0,this.currentHealth-damage.value);
			this.entity.removeComponent("Damage");
		}

		let heal = this.entity.getComponent("Heal");
		if(heal){

			this.currentHealth = Math.max(this.startingHealth,this.currentHealth+heal.value);
			this.entity.removeComponent("Heal");
		}

		let revive = this.entity.getComponent("Revive");
		if(revive){

			this.currentHealth = this.startingHealth;
		}
	}

	/*
		@OVERRIDE
	*/
	get value(){

		return this.currentHealth;
	}
}

