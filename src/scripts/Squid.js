function Squid() {
    this.squids = [];
    this.squidsNumber = 2;
    this.addSquid();
}

Squid.prototype.addSquid = function() {
    var i = 0,
        length = this.squidsNumber;

    for(i; i < length; i++) {
        this.squids.push(new MovingItem('octopus.png'));
        this.squids[i].scale.x = 0.6;
        this.squids[i].scale.y = 0.6;
        this.squids[i].position.x = (GAMEWIDTH/2)-(this.squids[i].width/2);
    	stage.addChild(this.squids[i]);
    }

    if(this.squids[1].position.x += GAMEWIDTH);

}

Squid.prototype.outOfScreen = function() {
    if(this.squids[0].position.x > 400) {
        console.log('left');
        this.squids[0].position.x = -this.squids[0].width;
    }
    if(this.squids[0].position.x < -this.squids[0].width) {
        console.log('right');
        this.squids[0].position.x = 400
    }
}
