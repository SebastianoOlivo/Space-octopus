function Squid() {
    this.addSquid();
}

Squid.prototype.addSquid = function() {
    var octopus = new MovingItem('octopus.png');
    octopus.scale.x = 0.8;
    octopus.scale.y = 0.8;
	stage.addChild(octopus);
}
