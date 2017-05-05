"use strict";

class Obstacle extends Entity {

	constructor(position,dimension,image,visible,solid){

		super();

		if(!(position instanceof Position)
		|| !(dimension instanceof Dimension)
		|| !(image instanceof Image)
		|| !(visible instanceof Visible)
		|| !(solid instanceof Solid)
		) throw "Terrain: constructor(): InvalidArgumentsException";

		this.addComponent(position);
		this.addComponent(dimension);
		this.addComponent(image);
		this.addComponent(visible);
		this.addComponent(solid);
	}
}

