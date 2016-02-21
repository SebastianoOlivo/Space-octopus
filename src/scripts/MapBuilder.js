function MapBuilder(number) {
    PIXI.ParticleContainer.call(this);

    this.number = number;

    //this.createBorders();
    this.createRocks();
    this.createSushis();
    this.side = 'left';

    this.viewportY = 0
}

MapBuilder.constructor = MapBuilder;
MapBuilder.prototype = Object.create(PIXI.ParticleContainer.prototype);


MapBuilder.prototype.createBorders = function() {
    this.borders = [];

    this.addBorderSprites(3, "border01.png");
    this.addBorderSprites(2, "border02.png");
    this.addBorderSprites(2, "border03.png");
    this.addBorderSprites(2, "border04.png");
    this.addBorderSprites(2, "jellyfish.png");

    this.shuffle(this.borders);
};

MapBuilder.prototype.addBorderSprites = function(amount, frameId) {
    for (var i = 0; i < amount; i++) {
        var sprite = PIXI.Sprite.fromFrame(frameId);
        this.borderSide(sprite, this.side);
        if (i % 2 == 0) {
             sprite.scale.x = -1;
        }

        this.addChild(sprite);
    }
};


MapBuilder.prototype.createRocks = function() {
    this.addRocksprites(1, "rock01.png");
    this.addRocksprites(1, "rock02.png");
    this.addRocksprites(1, "rock03.png");
    this.addRocksprites(1, "rock04.png");
    this.addRocksprites(1, "rock05.png");
    this.addRocksprites(1, "rock06.png");
    this.addRocksprites(1, "rock07.png");
};

MapBuilder.prototype.addRocksprites = function(amount, frameId) {
    var i = 0;

    for (i; i < amount; i++) {
        var sprite = PIXI.Sprite.fromFrame(frameId);
        var randomSize = Math.random() * (0.7 - 1) + 0.7;
        sprite.scale.x = randomSize;
        sprite.scale.y = randomSize;
        var originalPos = this.randomPos(sprite, GAMEWIDTH, 0, MAP_HEIGHT);
        this.addChild(sprite);
    }
};


MapBuilder.prototype.createSushis = function() {
    this.addSushisprites(1, "sushi01.png");
    this.addSushisprites(1, "sushi02.png");
};

MapBuilder.prototype.addSushisprites = function(amount, frameId) {
    for (var i = 0; i < amount; i++) {
        var sprite = PIXI.Sprite.fromFrame(frameId);
        var sushiSize = 0.8;
        sprite.scale.x = sushiSize;
        sprite.scale.y = sushiSize;
        this.randomPos(sprite, GAMEWIDTH, MAP_HEIGHT / (amount / i), MAP_HEIGHT / (amount / i) + (MAP_HEIGHT / amount));
        this.addChild(sprite);
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

MapBuilder.prototype.randomPos = function(elem, maxWidth, min, max) {
    elem.position.x = this.randomInt(0, (maxWidth - elem.width));
    elem.position.y = this.randomInt(min, max - elem.height);

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

MapBuilder.prototype.setViewportY = function(newViewportY) {
    var distanceTravelled = newViewportY - this.viewportY;
    this.viewportY = newViewportY;
    this.position.y += (distanceTravelled * 0.8);
};
