function Player(path, loop){
	this.sound;
	this._path = path;
	this._loop = loop;	
}

Player.prototype.loadSound = function(){
	this.sound = sounds[this._path];
	console.log(this.sound);
	
}

Player.prototype.playSound = function(){

	if(this._loop === true){ this.sound.loop = true; }
	this.sound.play();
}

Player.prototype.pauseSound = function(){
	this.sound.pause();
}