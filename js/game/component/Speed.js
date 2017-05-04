"use strict";

// @Version: 0.1.0

class Speed extends Component {

	constructor(entity,xSpeed,ySpeed){

		if(typeof xSpeed !== "number"
		|| typeof ySpeed !== "number"
		) throw "Speed: constructor(): InvalidArgumentsException";

		this.entity = entity;
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
	}

	/*
		@OVERRIDE
	*/
	update(){

		let speedController = this.entity.getComponent("speedController");
		if(speedController){
			this.xSpeed += speedController.X();
			this.ySpeed += speedController.Y();
		}
	}

	/*
		@OVERRIDE

		Returns the absolute value of this speeds vector

		value = sqrt( x^2 + y^2 )
	*/
	get value(){
		return Math.sqrt(this.xSpeed*this.xSpeed+this.ySpeed*this.ySpeed);
	}
}

