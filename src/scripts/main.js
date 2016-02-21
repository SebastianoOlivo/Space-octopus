// Initilize globals
var canvas = document.querySelector('#game'),
    GAMEWIDTH = canvas.width,
    GAMEHEIGHT = canvas.height,
    SCROLLSPEED = 6,
    MAP_HEIGHT = 1800,
    SPRITEID;

var renderer = PIXI.autoDetectRenderer(GAMEWIDTH, GAMEHEIGHT, {
    view: canvas
});
var stage = new PIXI.Container();

// Load assets
PIXI.loader.add('sprites/spriteSheet.json').load(game);

// Game process method
function game() {
    SPRITEID = PIXI.loader.resources['sprites/spriteSheet.json'].textures;

    var scroller = new Scroller(stage);
    var maps = new MapGenerator(stage);
    maps.generateMap();

    var squids = new Squid();

    //var octopus = new SpriteLoader(stage, 'octopus.jpg');

    function anim() {
        scroller.moveViewportYBy(SCROLLSPEED);
        maps.moveViewportYBy(SCROLLSPEED);

        //var collisions = new Collisions();

        renderer.render(stage);
        requestAnimationFrame(anim);
    }
    anim();
}
