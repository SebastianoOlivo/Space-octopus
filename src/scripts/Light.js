function Light(radius){
	this.light;
	this.addLight();
	this.posX = 200;
	this.posY = 200; 
}


Light.constructor = Light;

Light.prototype = Object.create(PIXI.Graphics.prototype);


Light.prototype.addLight = function(){
	this.light = new MovingItem('light.png')
	this.light.x = posX;
	this.light.y = posX;
	stage.addChild(this.light);
}

Light.prototype.moveLight = function(newPosX, newPosY){
	this.light.x = newPosX;
	this.light.y = newPosX;
}

