"use strict";

class Appearance extends Component {

	constructor(imageData,living,game,priority=0,framesToLive=Number.POSITIVE_INFINITY){

		super(living,game,priority,framesToLive);

		this.ImageData = imageData;
	}

	update(){

		let position = this.Living.getComponent("Position");

		if(!position) return;
		
		this.Game.PrimaryContext.putImageData(this.ImageData,position.X,position.Y);
	}

	set ImageData(imageData){

		if(!(imageData instanceof ImageData)) throw "Appearance: set: ImageData(): InvalidArgumentsException";

		this.imageData = imageData;
	}

	get ImageData(){

		return this.imageData;
	}
}

