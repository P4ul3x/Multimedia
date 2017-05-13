"use strict";

class Collision extends Component {

	constructor(living,game,priority=0,framesToLive=Number.POSITIVE_INFINITY){

		super(living,game,priority,framesToLive);
	}

	update(){

		super.update();

		let thisLiving = this.Living;

		let thisPosition = thisLiving.getComponent("Position");

		if(!thisPosition) return;

		let thisAppearance = thisLiving.getComponent("Appearance");

		if(!thisAppearance) return;

		let thisImageData = thisAppearance.ImageData;

		let livings = this.Game.Livings;

		for(let i=0;i<livings.length;i++){

			let otherLiving = livings[i];

			if(thisLiving === otherLiving) continue;

			if(!this.collidable(otherLiving)) continue;

			let otherPosition = otherLiving.getComponent("Position");

			if(!otherLiving) continue;

			let otherAppearance = otherLiving.getComponent("Appearance");

			if(!otherAppearance) continue;

			let otherImageData = otherAppearance.ImageData;

			if(this.boundingBoxCollide(thisPosition,thisImageData,otherPosition,otherImageData)
			&& this.pixelCollide(thisPosition,thisImageData,otherPosition,otherImageData)
			) this.collide();
		}
	}

	collidable(living){

		return living.getComponent("Collidable") ? true : false;
	}

	collide(){

		console.log("Collision!");
	}

	boundingBoxCollide(position1,imageData1,position2,imageData2){

		return position1.X < position2.X + imageData2.width
			&& position1.X + imageData1.width > position2.X
			&& position1.Y < position2.Y + imageData2.height
			&& position1.Y + imageData1.height > position2.Y;
	}

	pixelCollide(position1,imageData1,position2,imageData2){

		return true;
	}
}

