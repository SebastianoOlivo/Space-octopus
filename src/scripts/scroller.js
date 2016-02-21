function Scroller(stage) {
	this.far = new Background(0.4, 'far.png', 400, 600);
	stage.addChild(this.far);

	this.octopus = new MovingItem('octopus.jpg');
	stage.addChild(this.octopus);

	this.viewportY= 0;
}


Scroller.prototype.setViewportY = function(viewportY) {
	this.viewportY = viewportY;
	this.far.setViewportY(viewportY);
};

Scroller.prototype.getViewportY = function() {
	return this.viewportY;
};

Scroller.prototype.moveViewportYBy = function(units) {
	var newViewportY = this.viewportY + units;
	this.setViewportY(newViewportY);
};
