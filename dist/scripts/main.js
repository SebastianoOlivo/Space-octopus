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

'use strict';

var canvas = document.querySelector('#game'),
    GAMEWIDTH = canvas.width,
    GAMEHEIGHT = canvas.height;

var renderer = PIXI.autoDetectRenderer(GAMEWIDTH, GAMEHEIGHT, {view: canvas});
var stage = new PIXI.Container();

var scroller = new Scroller(stage);

var octopus = new SpriteLoader(stage, 'octopus.jpg');

function anim() {
    renderer.render(stage);
    requestAnimationFrame(anim);
    octopus.setPositionX(100);
}

anim();

function Scroller(stage) {
    this.far = new Background(1, 'sprites/testSprite.png', 400, 700);
    stage.addChild(this.far);
}

function SpriteLoader(stage, image) {
    var img;

    this.setPositionX = function(value) {
        if(img.position.x != undefined) {
            img.position.x = value;
        }
    }

    this.sprite = function() {
        var id = PIXI.loader.resources['sprites/testSprite.json'].textures;
        img = new PIXI.Sprite(id[image]);
        stage.addChild(img);
    }

    PIXI.loader.add('sprites/testSprite.json').load(this.sprite);
}
