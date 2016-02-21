MovingItem  = function (image, width, height){
    var _image = image;
    var _width = width;
    var _height = height;

    PIXI.Sprite.call(this, SPRITEID[image]);

    this.position.x = 80;
    this.position.y = 300;
}

MovingItem.constructor = MovingItem;
MovingItem.prototype = Object.create(PIXI.Sprite.prototype);
