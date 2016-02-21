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
    setIntervalId;

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
    var points = 0;

    var squids = new Squid();
    Keyboard();

    setIntervalId = setInterval(function(){
        points += 1;
        scrollSpeed += 0.01;
    }, 9);

    function anim() {
        scroller.moveViewportYBy(scrollSpeed);
        maps.moveViewportYBy(scrollSpeed);
        squids.outOfScreen();

        stage.children.forEach(function(value, index, array) {
            if(MapBuilder.prototype.isPrototypeOf(value)) {
                var parent = value;
                value.children.forEach(function(value, index, array) {
                    if(collisions(value, stage.children[7], parent)) {
                        if(value.name == "rock") {
                            endGame();
                        } else {
                            if(value.validity == true) {
                                console.log(scrollSpeed);
                                scrollSpeed *= 0.4; 
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
function endGame() {
    stage = new PIXI.Container();
    cancelAnimationFrame(requestAnimationFrameId);
    clearInterval(setIntervalId);
    scrollSpeed = 5;
    game();
}
