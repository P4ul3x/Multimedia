"use strict";

class Position extends Vector {

	constructor(x,y,living,game,priority=0,framesToLive=Number.POSITIVE_INFINITY){

		super(x,y,living,game,priority,framesToLive);
	}
}

