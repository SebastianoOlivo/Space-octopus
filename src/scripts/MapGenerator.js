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
		var map = new MapBuilder ();
		this.maps.push(map);
		console.log(map)
	};

	while(y >= 0) {
		MapGenerator.prototype.addMapsToStage(this.maps[y], ((-MAP_HEIGHT)*(y+1))+GAMEHEIGHT);
		y--;
	}
};

MapGenerator.prototype.addMapsToStage = function(map, pos) {
	map.position.y = pos;
	stage.addChild(map);
}

MapGenerator.prototype.setViewportY = function(viewportY) {
	/*if(viewportY >= MAP_HEIGHT-GAMEHEIGHT) {
		this.addMapsToStage(this.maps[1], -(MAP_HEIGHT-GAMEHEIGHT));
	}*/
	this.maps[0].setViewportY(viewportY);
	this.maps[1].setViewportY(viewportY);
};

MapGenerator.prototype.getViewportY = function() {
	return this.maps[0].viewportY;
};

MapGenerator.prototype.moveViewportYBy = function(units) {
	var newViewportY = this.maps[0].viewportY + units;
	this.setViewportY(newViewportY);
};
