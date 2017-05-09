"use strict";

class Draw extends Component {

	constructor(entity,framesToLive=Number.POSITIVE_INFINITY){

		super(entity,framesToLive);
	}

	// @OVERRIDE
	update(){

		super.update();

		let representation = this.entity.getComponent("Representation");
		if(!representation) return;

		let visible = this.entity.getComponent("Visible");
		if(!visible) return;

		let position = this.entity.getComponent("Position");
		if(!position) return;

		let game = this.entity.game;
		if(!game) return;

		let context = game.context;
		if(!context) return;

		let imageData = representation.imageData;
		if(!imageData) return;

		context.putImageData(imageData,position.X,position.Y,imageData.width,imageData.height);
	}
}

