function Background(delta, image, width, height) {
    var _speed = delta;
    var _image = PIXI.Texture.fromImage(image);
    var _width = width;
    var _height = height;

    PIXI.extras.TilingSprite.call(this, _image, this._width, this._height);

    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;
}

Background.constructor = Background;
Background.prototype = Object.create(PIXI.extras.TilingSprite.prototype);
