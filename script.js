//your code here
class OutOfRangeError extends Error{
	constructor(){
		super();
		this.name=this.constructor.name;
		this.message="Expression should only consist of integers and +-/* characters and not < arg >";
	}
}
class InvalidExprError extends Error{
	constructor(){
		super();
		this.name=this.constructor.name;
		this.message="Expression should not have an invalid combination of expression";
	}
}

function evalString(expression){
	try{
		if(/[\d+-/*\s]/.test(expression)==false) throw new OutOfRangeError();

		if(/(\+\+|\-\-|\*\*|\/\/|\+\-|\+\*|\/\*|\/\+|\-\+|\-\*|\/\-|\*\+|\*\-)/.test(expression)) throw new InvalidExprError();

		 if (/^[\/*+].*/.test(expression)) {
		      throw new SyntaxError();
		    }

	    if (/.*[\/*+-]$/.test(expression)) {
	      throw new SyntaxError();
	    }
		 return "Expression is valid and can be evaluated.";
	}catch(error){
		console.error(`${error.name}: ${error.message}`);
	}
}
