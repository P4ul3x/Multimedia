"use strict";

class Obstacle extends GameEntity {

	constructor(position,representation,visible,collision,game){

		super(game);

		if(!(position instanceof Position)
		|| !(representation instanceof Representation)
		|| !(visible instanceof Visible)
		|| !(collision instanceof Collision)
		) throw "Obstacle: constructor(): InvalidArgumentsException";

		this.addComponent(position);
		this.addComponent(representation);
		this.addComponent(visible);
		this.addComponent(collision);
	}
}

