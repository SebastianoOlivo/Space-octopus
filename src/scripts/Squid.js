function Squid() {
    this.addSquid();
}

Squid.prototype.addSquid = function() {
    this.octopus = new MovingItem('octopus.png');
    this.octopus.scale.x = 0.8;
    this.octopus.scale.y = 0.8;
    this.octopus.name = "lola";
	stage.addChild(this.octopus);
}
