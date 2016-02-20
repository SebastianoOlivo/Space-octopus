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

function anim() {
    renderer.render(stage);
    requestAnimationFrame(anim);
}

anim();

function Scroller(stage) {
    this.far = new Background((1, 'sprites/testSprite.png', 400, 700));
    stage.addChild(this.far);
}
