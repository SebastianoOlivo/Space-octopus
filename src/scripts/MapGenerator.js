function MapGenerator (stage){
	this.maps = [];
	this.stage  = stage;
	this.MAP_NUMBERS = 5;
	this.displayedMaps = 2;
}

MapGenerator.prototype.generateMap = function() {
	var i = this.MAP_NUMBERS,
		y = this.displayedMaps-1;

	for (i; i > 0; i--) {
		var map = new MapBuilder(i);
		this.maps.push(map);
	};

	console.log(this.maps);

	this.maps.forEach(function(value, index, array) {
		MapGenerator.prototype.addMapToStage(array[index], GAMEHEIGHT);
	})

	this.maps[0].position.y = -(MAP_HEIGHT-GAMEHEIGHT);
};

MapGenerator.prototype.addMapToStage = function(map, pos) {
	map.position.y = pos;
	stage.addChild(map);
}

MapGenerator.prototype.setViewportY = function(units) {
	var y = this.displayedMaps-1;
	this.digestMapCycle();

	this.maps[0].setViewportY(this.maps[0].viewportY + units);
	this.maps[1].setViewportY(this.maps[1].viewportY + units);
};

MapGenerator.prototype.digestMapCycle = function() {
	if(this.maps[0].position.y+GAMEHEIGHT === 0) {
		this.maps[1].position.y = -MAP_HEIGHT;
	}

	if(this.maps[0].position.y-GAMEHEIGHT >= 0) {
		this.maps[0].position.y = -MAP_HEIGHT;
		var item = this.maps.shift();
		this.maps.push(item);
	}
};

MapGenerator.prototype.getViewportY = function() {
	return this.maps[0].viewportY;
};

MapGenerator.prototype.moveViewportYBy = function(units) {
	this.setViewportY(units);
};
