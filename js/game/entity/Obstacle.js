"use strict";

class Obstacle extends Entity {

	constructor(position,representation,visible,collision){

		super();

		if(!(position instanceof Position)
		|| !(representation instanceof Representation)
		|| !(visible instanceof Visible)
		|| !(collision instanceof Collision)
		) throw "Terrain: constructor(): InvalidArgumentsException";

		this.addComponent(position);
		this.addComponent(representation);
		this.addComponent(visible);
		this.addComponent(collision);
	}
}

