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
        splash= new Player('audio/splash.wma');
        ambiance.loadSound();
        ambiance.playSound();
}



// Game process method
function game() {
    SPRITEID = PIXI.loader.resources['sprites/spriteSheet.json'].textures;

    var scroller = new Scroller(stage);
    var maps = new MapGenerator(stage);
    maps.generateMap();

    var squids = new Squid();

    keyboard();

    function anim() {
  
        scroller.moveViewportYBy(scrollSpeed);
        maps.moveViewportYBy(scrollSpeed);

        stage.children.forEach(function(value, index, array) {
            if (MapBuilder.prototype.isPrototypeOf(value)) {
                var parent = value;
                value.children.forEach(function(value, index, array) {
                    if (collisions(value, stage.children[7], parent)) {
                        console.log('BOUM');
                        console.log(value);
                        scrollSpeed = 0;
                        stage.children[7].position.y += 2;
                        return
                    }
                })
            }
        })

        renderer.render(stage);
        requestAnimationFrame(anim);
    }
    anim();
}