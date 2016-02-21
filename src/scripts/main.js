// Initilize globals
var canvas = document.querySelector('#game'),
    GAMEWIDTH = canvas.width,
    GAMEHEIGHT = canvas.height,
    MAP_HEIGHT = 1800,
    SPRITEID,
    scrollSpeed = 6,
    activeListeners = false,
    animation,
    requestAnimationFrameId;

var requestId;

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
    Keyboard();

    function anim() {
        scroller.moveViewportYBy(scrollSpeed);
        maps.moveViewportYBy(scrollSpeed);
        squids.outOfScreen();

        stage.children.forEach(function(value, index, array) {
            if(MapBuilder.prototype.isPrototypeOf(value)) {
                var parent = value;
                value.children.forEach(function(value, index, array) {
                    if(collisions(value, stage.children[7], parent)) {
                        endGame();
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
function endGame() {
    stage = new PIXI.Container();
    cancelAnimationFrame(requestAnimationFrameId);
    game();
}
