function Scroller(stage) {
	this.far = new Background(0.2, 'far.png', GAMEWIDTH, 600);
	stage.addChildAt(this.far, 0);
	this.mid = new Background(0.4, 'mid.png', GAMEWIDTH, 600);
	stage.addChildAt(this.mid, 1);

	this.viewportY= 0;
}


Scroller.prototype.setViewportY = function(viewportY) {
	this.viewportY = viewportY;
	this.far.setViewportY(viewportY);
	this.mid.setViewportY(viewportY);
};

Scroller.prototype.getViewportY = function() {
	return this.viewportY;
};

Scroller.prototype.moveViewportYBy = function(units) {
	var newViewportY = this.viewportY + units;
	this.setViewportY(newViewportY);
};
