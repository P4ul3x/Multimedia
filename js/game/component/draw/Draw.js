"use strict";

class Draw extends Component {

	constructor(entity){

		super();

		this.entity = entity;
	}

	/*
		@OVERRIDE
	*/
	update(){

		let context = this.entity.getComponent("Context");
		if(!context) return;

		let representation = this.entity.getComponent("Representation");
		if(!representation) return;

		let position = this.entity.getComponent("Position");
		if(!position) return;

		context.value.putImageData(representation.value,position.X,position.Y);
	}
}

