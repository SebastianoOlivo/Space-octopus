 function collisions(elem1, elem2, parent) {

    var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    //hit will determine whether there's a collision
    hit = false;

    //Find the center points of each sprite
    elem1.centerX = parent.toGlobal(elem1.position).x + elem1.width / 2;
    elem1.centerY = parent.toGlobal(elem1.position).y + elem1.height / 2;
    elem2.centerX = elem2.x + elem2.width / 2;
    elem2.centerY = elem2.y + elem2.height / 2;

    //Find the half-widths and half-heights of each sprite
    elem1.halfWidth = elem1.width / 2;
    elem1.halfHeight = elem1.height / 2;
    elem2.halfWidth = elem2.width / 2;
    elem2.halfHeight = elem2.height / 2;

    //Calculate the distance vector between the sprites
    vx = elem1.centerX - elem2.centerX;
    vy = elem1.centerY - elem2.centerY;

    //Figure out the combined half-widths and half-heights
    combinedHalfWidths = elem1.halfWidth + elem2.halfWidth;
    combinedHalfHeights = elem1.halfHeight + elem2.halfHeight;

    //Check for a collision on the x axis
    if (Math.abs(vx) < combinedHalfWidths) {

        //A collision might be occuring. Check for a collision on the y axis
        if (Math.abs(vy) < combinedHalfHeights*0.5) {

            //There's definitely a collision happening
            hit = true;
        } else {

            //There's no collision on the y axis
            hit = false;
        }
    } else {

        //There's no collision on the x axis
        hit = false;
    }

    //`hit` will be either `true` or `false`
    return hit;


};

function Keyboard(keyCode) {
    var key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    var move = false;
    //The `downHandler`
    function easeLeft() {
        move = true;
        stage.children[7].skew.x = -0.2;
        stage.children[7].scale.y = 0.55;
        function animation() {
            stage.children[7].position.x -= 7;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    function easeRight() {
        move = true;
        stage.children[7].skew.x = 0.2;
        stage.children[7].scale.y = 0.55;
        function animation() {
            stage.children[7].position.x += 7;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    function easeTop() {
        move = true;
        stage.children[7].scale.y = 0.7;
        function animation() {
            stage.children[7].position.y -= 7;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    function easeBottom() {
        move = true;
        stage.children[7].scale.y = 0.5;
        function animation() {
            stage.children[7].position.y += 7;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    key.downHandler = function(event) {
        if (event.keyCode === 37) {
            easeLeft();
        }

        if (event.keyCode === 39) {
            easeRight();
        }

        if (event.keyCode === 38) {
            easeTop();
        }

        if (event.keyCode === 40) {
            easeBottom();
        }
        event.preventDefault();
    };

    //The `upHandler`
    key.upHandler = function(event) { 
        move = false;
        stage.children[7].skew.x = 0;
        stage.children[7].scale.y = 0.6;
        event.preventDefault();
    };

    //Attach event listeners

    if(!activeListeners) {
        window.addEventListener(
            "keydown", key.downHandler.bind(key), false
        );
        window.addEventListener(
            "keyup", key.upHandler.bind(key), false
        );
        activeListeners = true;
    }


    return key;
}

function Light(radius){
	this.light;
	this.addLight();
	this.posX = 200;
	this.posY = 200; 
}


Light.constructor = Light;

Light.prototype = Object.create(PIXI.Graphics.prototype);


Light.prototype.addLight = function(){
	this.light = new MovingItem('light.png')
	this.light.x = posX;
	this.light.y = posX;
	stage.addChild(this.light);
}

Light.prototype.moveLight = function(newPosX, newPosY){
	this.light.x = newPosX;
	this.light.y = newPosX;
}


function Map(){
	
}
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
        var originalPos = this.randomPos(sprite, GAMEWIDTH+20, -20, MAP_HEIGHT);
        sprite.name = 'rock';
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
        sprite.name = "sushi";
        sprite.validity = true;

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

	this.maps.forEach(function(value, index, array) {
		MapGenerator.prototype.addMapToStage(array[index], GAMEHEIGHT);
	})

	this.maps[0].position.y = -(MAP_HEIGHT);
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
		console.log('add');
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

function Panel(){
    this.addPanel();
}

Panel.prototype.addPanel = function() {

    var panel = new MovingItem('start.png');
    panel.position.x = 0;
    panel.position.y = 0;
    panel.alpha = 0.2;
    var panelAlpha = panel.alpha;
    stage.addChild(panel);


    var coords = { x: 0, y: 0 };
    var tween = new TWEEN.Tween(coords)
        .to({ x: 0, y: 1 }, 1000)
        .onUpdate(function() {
            panel.alpha = this.y;
            renderer.render(stage);
        })
        .start();

    requestAnimationFrame(animate);

    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }

    this.removePanel = function() {
        stage.removeChild(panel);
    }
};

function Player(path, loop){
	this.sound;
	this._path = path;
	this._loop = loop;
}

Player.prototype.loadSound = function(){
	this.sound = sounds[this._path];	
}

Player.prototype.playSound = function(){

	if(this._loop === true){ this.sound.loop = true; }
	this.sound.play();
}

Player.prototype.pauseSound = function(){
	this.sound.pause();
}

function Scoring() {
    var style = {
        font : 'bold italic 36px Arial',
        align : 'right',
        fill : '#F7EDCA',
        stroke : '#4a1850',
        strokeThickness : 5,
        dropShadow : true,
        dropShadowColor : '#000000',
        dropShadowAngle : Math.PI / 6,
        dropShadowDistance : 6,
        wordWrap : true,
        wordWrapWidth : 440
    };

    var style2 = {
        font : 'bold italic 28px Arial',
        fill : '#7ED321',
        stroke : '#4a1850',
        strokeThickness : 5,
        dropShadow : true,
        dropShadowColor : '#000000',
        dropShadowAngle : Math.PI / 6,
        dropShadowDistance : 6,
        wordWrap : true,
        wordWrapWidth : 440
    };

    this.scoreText = new PIXI.Text(0 +' m', style);
    this.scoreText.x = 15;
    this.scoreText.y = GAMEHEIGHT-100;
    stage.addChild(this.scoreText);

    this.bestScoreText = new PIXI.Text(0 +' m', style2);
    this.bestScoreText.x = 15;
    this.bestScoreText.y = GAMEHEIGHT-55;
    stage.addChild(this.bestScoreText);
}

Scoring.prototype.setScore = function(points) {
    this.scoreText.text = Math.round(points)+' m';
}

Scoring.prototype.setBestScore = function(points) {
    this.bestScoreText.text = Math.round(points)+' m';
}

function Squid() {
    this.squids = [];
    this.squidsNumber = 2;
    this.addSquid();
}

Squid.prototype.addSquid = function() {

    this.squid = new MovingItem('octopus.png');
    this.squid.scale.x = 0.6;
    this.squid.scale.y = 0.6;
    this.squid.position.x = (GAMEWIDTH/2)-(this.squid.width/2);
    this.squid.position.y = (GAMEHEIGHT/2)-(this.squid.height/2);
    stage.addChild(this.squid);

    this.light = new MovingItem('light.png');
    this.light.position.x = (this.squid.x)-(this.light.width/2);
    this.light.position.y = (this.squid.y)-(this.light.height/2);
    this.light.scale.x = 2;
    this.light.scale.y = 2;
    stage.addChild(this.light);
}

Squid.prototype.outOfScreen = function() {
    if(this.squid.position.x+(this.squid.width/2) > GAMEWIDTH) {
        this.squid.position.x = -(this.squid.width)/2;
    }
    if(this.squid.position.x < -(this.squid.width/2)) {
        this.squid.position.x = GAMEWIDTH-(this.squid.width/2);
    }

    if(this.squid.position.y > GAMEHEIGHT-40) {
        this.squid.position.y = GAMEHEIGHT-40;
    }

    if(this.squid.position.y < 0) {
        this.squid.position.y = 0;

    }

    this.light.position.x = (this.squid.x+this.squid.width/2)-(this.light.width/2);
    this.light.position.y = (this.squid.y+this.squid.height/2)-(this.light.height/2);
}

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
// Initilize globals
var canvas = document.querySelector('#game'),
    GAMEWIDTH = canvas.width,
    GAMEHEIGHT = canvas.height,
    MAP_HEIGHT = 1800,
    SPRITEID,
    scrollSpeed = 6,
    activeListeners = false,
    animation,
    requestAnimationFrameId,
    setIntervalId,
    currentScore = 0,
    bestScore = 0,
    panel;

var requestId;

var renderer = PIXI.autoDetectRenderer(GAMEWIDTH, GAMEHEIGHT, {
    view: canvas
});
var stage = new PIXI.Container();

// Load assets
PIXI.loader.add('sprites/spriteSheet.json').load(showPanel);

sounds.load(['audio/ambiance.mp3', 'audio/impact.mp3', 'audio/last_breath.mp3', 'audio/monster_attack.mp3', 'audio/splash.mp3']);
sounds.whenLoaded = soudLoaded;

var ambiance = '',
    impact = '',
    last_breath = '',
    monster_attack = '',
    splash = '';


function soudLoaded() {
    ambiance = new Player('audio/ambiance.mp3', true);
    impact = new Player('audio/impact.mp3');
    last_breath = new Player('audio/last_breath.wma');
    monster_attack = new Player('audio/monster_attack.mp3');
    splash = new Player('audio/splash.wma');
    ambiance.loadSound();
    ambiance.playSound();
}

function showPanel() {
    SPRITEID = PIXI.loader.resources['sprites/spriteSheet.json'].textures;
    panel = new Panel();
    window.addEventListener("keydown", game, false);
}

// Game process method
function game() {

    // create a filter
    var blurFilter = new PIXI.filters.PixelateFilter();

    // set the filter
    stage.filters = [blurFilter];

    var coords = { x: 0, y: 16 };
    var tween = new TWEEN.Tween(coords)
        .to({ x: 0, y: 1 }, 500)
        .onUpdate(function() {
            blurFilter.size.y = this.y;
            blurFilter.size.x = this.y;
        })
        .start();

    requestAnimationFrame(animate);

    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }

    panel.removePanel();
    window.removeEventListener("keydown", game, false);
    var scroller = new Scroller(stage);
    var maps = new MapGenerator(stage);
    maps.generateMap();
    currentScore = 0;

    var squids = new Squid();
    Keyboard();

    scoring = new Scoring();

    setIntervalId = setInterval(function() {
        currentScore += 0.08;
        scrollSpeed += 0.002;
    }, 9);

    function anim() {
        scroller.moveViewportYBy(scrollSpeed);
        maps.moveViewportYBy(scrollSpeed);
        squids.outOfScreen();
        scoring.setScore(currentScore);
        scoring.setBestScore(bestScore);

        stage.children.forEach(function(value, index, array) {
            if (MapBuilder.prototype.isPrototypeOf(value)) {
                var parent = value;
                value.children.forEach(function(value, index, array) {
                    if (collisions(value, stage.children[7], parent)) {
                        if (value.name == "rock") {
                            endGame(currentScore);
                        } else {
                            if (value.validity == true) {
                                currentScore += 10;
                                value.position.x = - GAMEWIDTH;
                                scrollSpeed *= 0.7;
                                value.validity = false;
                            }
                        }
                        return;
                    }
                })
            }
        })

        renderer.render(stage);
        requestAnimationFrameId = requestAnimationFrame(anim);
    }
    anim();
}

//game over
function endGame(currentScore) {
    if(currentScore > bestScore) {
        bestScore = currentScore;
    }
    currentScore = 0;
    stage = new PIXI.Container();
    cancelAnimationFrame(requestAnimationFrameId);
    clearInterval(setIntervalId);
    scrollSpeed = 5;
    setTimeout(showPanel, 100);
}

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
