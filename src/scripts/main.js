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
