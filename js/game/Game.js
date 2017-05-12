"use strict";

class Game {

	constructor(context){

		this.PrimaryContext = context;

		this.SecundaryContext = document.createElement("canvas").getContext("2d");

		this.fuel = 0;

		this.livings = {};

		this.codes = {};
	}

	start(){

		this.PrimaryContext.clearRect(0,0,this.PrimaryContext.canvas.width,this.PrimaryContext.canvas.height);

		for(let livingIdentification in this.livings){

			for(let livingNumber in this.livings[livingIdentification]){

				this.livings[livingIdentification][livingNumber].update();
			}
		}

		this.fuel = window.requestAnimationFrame(this.start.bind(this));
	}

	stop(){

		window.cancelAnimationFrame(this.fuel);
	}

	addLiving(living){

		if(!(living instanceof Living)) throw "Game: addLiving(): InvalidArgumentsException";

		let identification = living.Identification;

		let local = this.livings[identification];

		if(!local){

			local = this.livings[identification] = {};
		}

		let codes = this.codes[identification];

		if(!codes){

			codes = this.codes[identification] = {

				LastCode: 0,

				UnusedCodes: []
			};
		}

		let code;

		if(codes.UnusedCodes.length){

			code = codes.UnusedCodes.pop();
		}
		else {

			code = codes.LastCode++;
		}

		local[code] = living;

		living.Code = code;
	}

	getLivings(livingsIdentification){

		if(typeof livingIdentification !== "string") throw "Game: getLivings(): InvalidArgumentsException";

		return this.livings[livingIdentification];
	}

	removeLiving(living){

		if(!(living instanceof Living)) throw "Game: removeLiving(): InvalidArgumentsException";

		let identification = living.Identification;

		let local = this.livings[identification];

		if(!local) throw "Game: removeLiving(): InvalidArgumentsException";

		let codes = this.codes[identification];

		if(!codes) throw "Game: removeLiving(): InvalidArgumentsException";

		let code = living.Code;

		delete local[code];

		codes.UnusedCodes.push(code);
	}

	set PrimaryContext(context){

		if(!(context instanceof CanvasRenderingContext2D)) throw "Game: set: PrimaryContext(): InvalidArgumentsException";

		this.primaryContext = context;
	}

	set SecundaryContext(context){

		if(!(context instanceof CanvasRenderingContext2D)) throw "Game: set: SecundaryContext(): InvalidArgumentsException";

		this.secundaryContext = context;
	}

	get PrimaryContext(){

		return this.primaryContext;
	}

	get SecundaryContext(){

		return this.secundaryContext;
	}

	get Livings(){

		let livings = [];

		for(let livingIdentification in this.livings){

			for(let livingNumber in this.livings[livingIdentification]){

				livings.push(this.livings[livingIdentification][livingNumber]);
			}
		}

		return livings;
	}
}

