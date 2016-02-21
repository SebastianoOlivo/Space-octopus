function MapBuilder() {
    this.createBorders();
    this.createRocks();
    this.createSushis();
    this.side = 'left';
}

MapBuilder.constructor = MapBuilder;
MapBuilder.prototype = Object.create(PIXI.Container.prototype);


MapBuilder.prototype.createBorders = function() {
    this.borders = [];
    this.addBorderSprites(6, "border_left.png");
    this.addBorderSprites(6, "border_right.png");
    this.shuffle(this.borders);
};

MapBuilder.prototype.addBorderSprites = function(amount, frameId) {
    for (var i = 0; i < amount; i++) {
        var sprite = PIXI.Sprite.fromFrame(frameId);
        this.borderSide(sprite, this.side);
        this.borders.push(sprite);
    }
};


MapBuilder.prototype.createRocks = function() {
    this.Rocks = [];

    this.addRocksprites(6, "rock01.png");
    this.addRocksprites(7, "rock02.png");
    this.addRocksprites(9, "rock03.png");
    this.shuffle(this.Rocks);
};

MapBuilder.prototype.addRocksprites = function(amount, frameId) {
    for (var i = 0; i < amount; i++) {
        var sprite = PIXI.Sprite.fromFrame(frameId);
        this.position(sprite, GAMEWIDTH,  MAP_HEIGHT);
        this.Rocks.push(sprite);
    }
};


MapBuilder.prototype.createSushis = function() {
    this.Sushis = [];

    this.addSushisprites(3, "sushi01.png");
    this.addSushisprites(4, "sushi02.png");
    this.addSushisprites(6, "sushi03.png");

    this.shuffle(this.Sushis);
};

MapBuilder.prototype.addSushisprites = function(amount, frameId) {
    for (var i = 0; i < amount; i++) {
        var sprite = PIXI.Sprite.fromFrame(frameId);
        this.position(sprite, GAMEWIDTH,  MAP_HEIGHT);
        this.Sushis.push(sprite);
    }
};

MapBuilder.prototype.borderSide = function(elem, side) {
    elem.position.y = this.randomInt(0, MAP_HEIGHT - elem.height);
    if (side === 'left') {
        elem.position.x = 0;
        this.side = 'right';

    } else {

        elem.position.x = 400;
        this.side = 'left';

    }
}

MapBuilder.prototype.position = function(elem, maxWidth, maxHeight) {
    elem.position.x = this.randomInt(0, maxWidth - elem.width);
    elem.position.y = this.randomInt(0, maxHeight - elem.height);
}

MapBuilder.prototype.randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

MapBuilder.prototype.shuffle = function(array) {
    var len = array.length;
    var shuffles = len * 3;
    for (var i = 0; i < shuffles; i++) {
        var wallSlice = array.pop();
        var pos = Math.floor(Math.random() * (len - 1));
        array.splice(pos, 0, wallSlice);
    }
};