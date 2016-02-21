function MapGenerator (){
	this.maps = [];
	this.MAP_NUMBERS = 5;
}

MapGenerator.prototype.generateMap = function() {
	for (var i = this.MAP_NUMBERS; i >= 0; i--) {
		var map = new MapBuilder ();
		this.maps.push(map);
		console.log(map)
	};

};
