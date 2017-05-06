"use strict";

class Visible extends Component {

	constructor(entity){

		super(entity);
	}

	/*
		@OVERRIDE
	*/
	update(){

		let context = this.entity.getComponent("Context");
		if(context){

			let representation = this.entity.getComponent("Representation");
			if(representation){

				let position = this.entity.getComponent("Position");
				if(position) this.draw(context,representation,position);
			}
		}
	}

	draw(context,representation,position){

		if(!(context instanceof Context)
		|| !(representation instanceof Representation)
		|| !(position instanceof Position)
		) throw "Visible: draw(): InvalidArgumentsException";

		context = context.value;
		let imageData = representation.value;
		let xCoordinate = position.X;
		let yCoordinate = position.Y;
		context.putImageData(imageData,xCoordinate,yCoordinate);
	}

	static test(){
		console.log("TEST: VISIBLE");
		console.log("VISIBLE TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

