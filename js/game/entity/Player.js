"use strict";

class Player extends GameEntity {

	constructor(game,character){

		super(game);

		if(typeof character !== "number") throw "Player: constructor(): InvalidArgumentsException";

		this._character = character //not in effect yet

		var image = new Image();
		var imageData;

		image.addEventListener("load", function(event){

			let canvas = document.getElementById("OperationCanvas");
			let context = canvas.getContext("2d");
			canvas.width = image.naturalWidth;
			canvas.height = image.naturalHeight;
			context.clearRect(0,0,canvas.width,canvas.height);
			context.drawImage(image,0,0);
			imageData = context.getImageData(0,0,canvas.width,canvas.height);

			this.addComponents( new Visible(this),
								new Representation(imageData,this),
								new Position(100,100,this),
								
								new BaseSpeed(3,this),
								new MovementInput(this),
								new VelocityByInput(0,0,this),
								new Direction(0,1,this),

								new AttackInput(this),
								
								new Draw(this)
								);

		}.bind(this));

		image.crossOrigin = '';
		image.src = "https://github.com/P4ul3x/Multimedia/blob/master/resources/menu/keyup.png?raw=true";

	}

	update(){

		super.update();

		let input = this.getComponent("AttackInput");
		if(!input) return;

		switch(input.attackKey){
			case window.GLOBAL.ATTACK_KEYS.BASIC: break;
			case window.GLOBAL.ATTACK_KEYS.THROW: this.game.addEntity(new Throw1(this.game,this)); console.log(2); break;
			case window.GLOBAL.ATTACK_KEYS.SPECIAL: break;
			case window.GLOBAL.ATTACK_KEYS.ULTIMATE: break;
		}
	}

}
