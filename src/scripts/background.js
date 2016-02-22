function Background(delta, image, width, height) {
    this.delta = delta;
    var _image = image;
    var _width = width;
    var _height = height;

    PIXI.extras.TilingSprite.call(this, SPRITEID[image], _width, _height);

    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;

    this.viewportY =0;
}

Background.constructor = Background;
Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Background.prototype.setViewportY = function(newViewportY) {
	var distanceTravelled = newViewportY - this.viewportY;
	this.viewportY = newViewportY;
	this.tilePosition.y += (distanceTravelled*this.delta);
};