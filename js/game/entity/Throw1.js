"use strict";

class Throw1 extends Attack{

	constructor(game,entity){

		super(game,entity);

		var image = new Image();
		var imageData;

		var direction;
		if(!(direction = this.gameEntity.getComponent("Direction"))) return;

		var position;
		if(!(position = this.gameEntity.getComponent("Position"))) return;

		image.addEventListener("load", function(event){

			let canvas = document.getElementById("OperationCanvas");
			let context = canvas.getContext("2d");
			canvas.width = image.naturalWidth/10;
			canvas.height = image.naturalHeight/10;
			context.clearRect(0,0,canvas.width,canvas.height);
			context.drawImage(image,0,0,canvas.width,canvas.height);
			imageData = context.getImageData(0,0,canvas.width,canvas.height);

			this.addComponents( new Visible(this),
								new Representation(imageData,this),
								new Position(position.X,position.Y,this),
								new Velocity(direction.X*5,direction.Y*5,this),								
								new Draw(this)
								);

		}.bind(this));

		image.crossOrigin = '';
		image.src = "https://github.com/P4ul3x/Multimedia/blob/master/resources/menu/SinglePlayerMenu/interrogationMark.png?raw=true";

	}


}