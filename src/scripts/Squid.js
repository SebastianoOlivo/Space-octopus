function Squid() {
    this.squids = [];
    this.squidsNumber = 2;
    this.addSquid();
}

Squid.prototype.addSquid = function() {

    this.squid = new MovingItem('octopus.png');
    this.squid.scale.x = 0.6;
    this.squid.scale.y = 0.6;
    this.squid.position.x = (GAMEWIDTH/2)-(this.squid.width/2);
    this.squid.position.y = (GAMEHEIGHT/2)-(this.squid.height/2);
    stage.addChild(this.squid);

    this.light = new MovingItem('light.png');
    this.light.position.x = (this.squid.x)-(this.light.width/2);
    this.light.position.y = (this.squid.y)-(this.light.height/2);
    this.light.scale.x = 2;
    this.light.scale.y = 2;
    stage.addChild(this.light);
}

Squid.prototype.outOfScreen = function() {
    if(this.squid.position.x+(this.squid.width/2) > GAMEWIDTH) {
        this.squid.position.x = -(this.squid.width)/2;
    }
    if(this.squid.position.x < -(this.squid.width/2)) {
        this.squid.position.x = GAMEWIDTH-(this.squid.width/2);
    }

    if(this.squid.position.y > GAMEHEIGHT-40) {
        this.squid.position.y = GAMEHEIGHT-40;
    }

    if(this.squid.position.y < 0) {
        this.squid.position.y = 0;

    }

    this.light.position.x = (this.squid.x+this.squid.width/2)-(this.light.width/2);
    this.light.position.y = (this.squid.y+this.squid.height/2)-(this.light.height/2);
}
