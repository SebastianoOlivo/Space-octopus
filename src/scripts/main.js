// Initilize globals
var canvas = document.querySelector('#game'),
    GAMEWIDTH = canvas.width,
    GAMEHEIGHT = canvas.height,
    SCROLLSPEED = 5,
    MAP_HEIGHT = 1800,
    SPRITEID;

var renderer = PIXI.autoDetectRenderer(GAMEWIDTH, GAMEHEIGHT, {
    view: canvas
});
var stage = new PIXI.Container();

// Load assets
PIXI.loader.add('sprites/testSprite.json').load(game);

// Game process method
function game() {
    SPRITEID = PIXI.loader.resources['sprites/testSprite.json'].textures;

    var scroller = new Scroller(stage);
    var viewport = new MapGenerator(stage);
    viewport.generateMap();

    //var octopus = new SpriteLoader(stage, 'octopus.jpg');

    function anim() {
        scroller.moveViewportYBy(SCROLLSPEED);
        viewport.moveViewportYBy(SCROLLSPEED);
        renderer.render(stage);
        requestAnimationFrame(anim);
    }
    anim();
}
