"use strict";

/*
	An Entity is anything identifiable.
	It may or may not have components associated.
*/
class Entity {

	constructor(){

		this.identification = this.constructor.name + nextIdentification(this.constructor.name);

		this.components = {};
	}

	/*
		Adds a component to this entity.
		If an entity already has a component of the specified type,
		this method will override that component.

		@component: the component to be added
	*/
	addComponent(component){

		if(!(component instanceof Component)) throw "Entity: addComponent(): InvalidArgumentsException";

		this.components[component.identification] = component;
	}

	/*
		Removes a component from this entity

		@componentIdentification: the components' identification
	*/
	removeComponent(componentIdentification){

		delete this.components[componentIdentification];
	}

	/*
		Returns a component with the given identification from this entity

		@componentIdentification: the components' identification
	*/
	getComponent(componentIdentification){

		return this.components[componentIdentification];
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

