var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/cat1.jpg',
		imgAttribution: 'www.yahoo.com',
		catLevel: 'NewBorn',
		nickNames: ['Blue', 'Algae', 'Ray']
	},
	{
		clickCount: 0,
		name: 'Tiger',
		imgSrc: 'img/car2.jpg',
		imgAttribution: 'www.yahoo.com',
		catLevel: 'NewBorn',
		nickNames: ['Red', 'Love', 'Princess']
	},
	{
		clickCount: 0,
		name: 'Sheila',
		imgSrc: 'img/cat3.jpg',
		imgAttribution: 'www.yahoo.com',
		catLevel: 'NewBorn',
		nickNames: ['Lauren', 'Vasily', 'Owen']
	}
]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.catLevel = ko.observable(data.catLevel);
	this.nickNames = ko.observableArray(data.nickNames);

	this.level = ko.computed(function() {
		if (this.clickCount() >= 10)
			this.catLevel('Infant');
		if (this.clickCount() >= 20)
			this.catLevel('Kitten');
		if (this.clickCount() >= 30)
			this.catLevel('Tiger');
		}, this)
}

//Make Cats Show Up in a List - can do in HTML with bindings
//Make Cats in list clickable - should change cureentCat observable to clicked cat - make function for setting new currentCat
//Make currentCat change when you click on cat in List




var ViewModel = function() {

	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.changeCat = function(clickedCat) {
		self.currentCat(clickedCat);
	}

	this.incrementCounter = function() {
		console.log('click');
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	} //this is essentially var count = 0; count ++ - remember the value of observables are functions so clickCount() = 0
}

ko.applyBindings(new ViewModel())
