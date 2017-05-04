"use strict";

// @Version: 0.1.0

/*
	A Position is a meaninfull way of saving
	two dimensional coordinates.
*/
class Position extends Component {

	/*
		@xCoordinate: the x-axis coordinate of the context
		@yCoordinate: the y-axis coordinate of the context
	*/
	constructor(entity,xCoordinate,yCoordinate){

		super(entity);

		if(typeof xCoordinate !== "number"
		|| typeof yCoordinate !== "number"
		) throw "Position: constructor(): InvalidArgumentsException";

		this.identification = this.constructor.name;

		this.xCoordinate = xCoordinate;
		this.yCoordinate = yCoordinate;
	}

	/*
		@OVERRIDE
	*/
	update(){

		let speed = this.entity.getComponent("Speed");
		if(speed){
			this.xCoordinate += speed.X();
			this.yCoordinate += speed.Y();
		}
	}

	get X(){
		return this.x;
	}

	get Y(){
		return this.y;
	}

	/*
		@OVERRIDE

		Returns a vector with this positions' coordinates
	*/
	get value(){
		return [this.x,this.y];
	}

	static test(){
		console.log("TEST: Position");
		console.log("Position TEST SUCCEEDED");
		window.dispatchEvent(new Event("done"));
	}
}

