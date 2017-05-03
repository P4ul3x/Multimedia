"use strict";

// @Version: 0.2.0

/*
	An Entity is anything identifiable.
	It may or may not have components associated.
*/
class Entity {

	/*
		@identification: any comparable object
	*/
	constructor(identification){

		if(!identification)
			throw "Entity: constructor(): InvalidArgumentsException";

		this.identification = identification;
		this.components = {};
	}

	/*
		Adds a component to this entity

		@component: the component to be added
	*/
	addComponent(component){

		if(!(component instanceof Component))
			throw "Entity: addComponent(): InvalidArgumentsException";

		this.components[component.identification] = component;
	}

	/*
		Removes a component from this entity

		@componentIdentification: the components' identification
	*/
	removeComponent(componentIdentification){

		delete this.components[componentIdentification]
	}

	/*
		updates this entities components
	*/
	update(){

		for(let componentIdentification in this.components)
			this.components[componentIdentification].update();
	}

	static test(){
		console.log("TEST: ENTITY");
		console.log("ENTITY TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

