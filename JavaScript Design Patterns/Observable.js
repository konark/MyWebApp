var Book = function (name, price){
	// name and price in terms of closure will be available below
	var priceChanging = []; // array of callback functions to be executed on price changing event
	var priceChanged = []; // array of callback functions to be executed on price changed
	this.name = function (val){
		return name;
	};

	this.price = function (val){
		if(val !== undefined && val !== price){
			for (var i=0; i < priceChanging.length; i++) {
				if(!priceChanging[i](this,val)){
					return price;
				}
			}
			price = val;
			for (var i = 0; i < priceChanged.length; i++) {
				priceChanged[i](this);
			};

		}
		return price;
	};

	this.onPriceChanging = function (callback){
		priceChanging.push(callback);
	};

	this.onPriceChanged = function (callback){
		priceChanged.push(callback);
	};
};
debugger;
var book = new Book('taco', 19.00);
console.log('The name is: ' + book.name());
console.log('The price is $' + book.price());

// with the following method we are actually pushing a function(b, price) pointer to the array priceChanging
// this will eventually be call when we do book.price(23)
book.onPriceChanging(function(b, price){
	if(price > 100){
		console.log('Sys error, price got unexpectedly high');
		return false;
	}
	return true;
});
book.onPriceChanged(function(b){
	console.log('Book price changed to $' + b.price());
});

book.price(23);
book.price(101);
