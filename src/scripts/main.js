// Initilize globals
var canvas = document.querySelector('#game'),
    GAMEWIDTH = canvas.width,
    GAMEHEIGHT = canvas.height,
    MAP_HEIGHT = 1800,
    SPRITEID,
    scrollSpeed = 6;

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
    console.log(stage.children);

    function anim() {
        scroller.moveViewportYBy(scrollSpeed);
        maps.moveViewportYBy(scrollSpeed);

        if(collisions(stage.children[6], stage.children[1]) === true || collisions(stage.children[6], stage.children[2]) === true || collisions(stage.children[6], stage.children[3]) === true || collisions(stage.children[6], stage.children[4]) === true || collisions(stage.children[6], stage.children[5]) === true) {
            scrollSpeed = 0;
        }

        renderer.render(stage);
        requestAnimationFrame(anim);
    }
    anim();
}
