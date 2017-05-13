"use strict";

class Living extends Entity {

	constructor(game,framesToLive=Number.POSITIVE_INFINITY){

		super(game,framesToLive);

		this.Game.addLiving(this);

		this.components = {};

		this.priorities = {};
	}

	update(){

		super.update();

		if(this.FramesToLive <= 0){

			this.Game.removeLiving(this);
		}

		for(let componentPriority in this.components){

			for(let componentIdentification in this.components[componentPriority]){

				this.components[componentPriority][componentIdentification].update();
			}
		}
	}

	addComponent(component){

		if(!(component instanceof Component)) throw "Living: addComponent(): InvalidArgumentsException";

		let identification = component.Identification;

		let priority = this.priorities[identification];

		let local;

		if(priority){

			local = this.components[priority];

			if(!local) throw "Living: addComponent(): InvalidArgumentsException";

			this.removeComponent(local[identification]);
		}

		priority = component.Priority;

		local = this.components[priority];

		if(!local){

			local = this.components[priority] = {};
		}

		local[identification] = component;

		this.priorities[identification] = priority;
	}

	getComponent(componentIdentification){

		if(typeof componentIdentification !== "string") throw "Living: getComponent(): InvalidArgumentsException";

		let priority = this.priorities[componentIdentification];

		if(priority === undefined) return;

		let local = this.components[priority];

		if(local === undefined) return;

		return local[componentIdentification];
	}

	removeComponent(component){

		if(!(component instanceof Component)) throw "Living: removeComponent(): InvalidArgumentsException";

		let identification = component.Identification;

		let priority = component.Priority;

		let local = this.components[priority];

		if(local){

			delete local[identification];
		}

		delete this.priorities[identification];
	}

	set Code(code){

		if(typeof code !== "number") throw "Living: set: Code(): InvalidArgumentsException";

		this.code = code;
	}

	get Code(){

		return this.code;
	}
}

