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
