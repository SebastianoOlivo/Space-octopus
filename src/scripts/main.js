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
