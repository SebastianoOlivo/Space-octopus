function MapBuilder(number) {
    PIXI.ParticleContainer.call(this);

    this.number = number;

    this.createBorders();
    this.createRocks();
    this.createSushis();
    this.side = 'left';

    this.viewportY = 0
}

MapBuilder.constructor = MapBuilder;
MapBuilder.prototype = Object.create(PIXI.ParticleContainer.prototype);


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
    this.addRocksprites(2, "rock01.png");
    this.addRocksprites(1, "rock02.png");
    this.addRocksprites(3, "rock03.png");
};

MapBuilder.prototype.addRocksprites = function(amount, frameId) {
    var i = 0;

    for (i; i < amount; i++) {
        var sprite = PIXI.Sprite.fromFrame(frameId);
        //console.log(MAP_HEIGHT/(amount/i)+(MAP_HEIGHT/amount), MAP_HEIGHT/(amount/i));
        this.randomPos(sprite, GAMEWIDTH, MAP_HEIGHT/(amount/i), MAP_HEIGHT/(amount/i)+(MAP_HEIGHT/amount));
        this.addChild(sprite);
    }
};


MapBuilder.prototype.createSushis = function() {
    this.addSushisprites(1, "sushi01.png");
    this.addSushisprites(1, "sushi02.png");
    this.addSushisprites(1, "sushi03.png");
};

MapBuilder.prototype.addSushisprites = function(amount, frameId) {
    for (var i = 0; i < amount; i++) {
        var sprite = PIXI.Sprite.fromFrame(frameId);
        this.randomPos(sprite, GAMEWIDTH, MAP_HEIGHT/(amount/i), MAP_HEIGHT/(amount/i)+(MAP_HEIGHT/amount));
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
    elem.position.x = this.randomInt(0-GAMEWIDTH/5, (maxWidth - elem.width)+GAMEWIDTH/5);
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
	this.position.y += (distanceTravelled*0.8);
};
