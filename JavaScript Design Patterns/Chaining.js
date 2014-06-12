var Calc = function (start) {
	this.add = function (x) { 
		start = start + x;
		return this; // this returns the current state and have a special significance in JS
    };
	this.multiply = function (x) { 
		start = start * x;
		return this; 
	};
	this.equals = function (callback) {
		callback(start);
		return this;
	}
};
console.log('hello world');
var result = new Calc(0).add(1).add(2).multiply(3).equals(function(val){
	console.log(val);
})
