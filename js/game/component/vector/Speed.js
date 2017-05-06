"use strict";

class Speed extends Component {

	constructor(entity,value){

		super(entity);

		this.value = value;
	}

	/*
		@OVERRIDE
	*/

	get value(){
		return this.value;
	}

}

