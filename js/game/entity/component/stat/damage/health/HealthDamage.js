"use strict";

class HealthDamage extends Damage {

	constructor(value,living,game,priority=0,framesToLive=Number.POSITIVE_INFINITY){

		super(value,living,game,priority,framesToLive);
	}

	update(){

		super.update();

		let health = this.Living.getComponent("Health");
		
		if(!health) return;

		health.Value -= this.Value;
	}
}

