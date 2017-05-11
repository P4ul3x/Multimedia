"use strict";

class Player extends GameEntity {

	constructor(game){

		super(game);

		var image = new Image();
		var imageData;

		image.addEventListener("load", function(event){

			let context = document.getElementById("OperationCanvas").getContext("2d");
			context.canvas.width = image.naturalWidth;
			context.canvas.height = image.naturalHeight;
			context.clearRect(0,0,image.naturalWidth,image.naturalHeight);
			context.drawImage(image,0,0);
			imageData = context.getImageData(0,0,image.naturalWidth,image.naturalHeight);

			this.addComponents( new Visible(this),
								new Representation(imageData,this),
								new Position(100,100,this),
								new BaseSpeed(3,this),
								new MovementInput(this),
								new VelocityByInput(0,0,this),
								new Draw(this)
								);

		}.bind(this));

		image.crossOrigin = '';
		image.src = "https://github.com/P4ul3x/Multimedia/blob/master/resources/menu/keyup.png?raw=true";

	}

}
