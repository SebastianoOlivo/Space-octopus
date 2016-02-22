function Scoring() {
    var style = {
        font : 'bold italic 36px Arial',
        align : 'right',
        fill : '#F7EDCA',
        stroke : '#4a1850',
        strokeThickness : 5,
        dropShadow : true,
        dropShadowColor : '#000000',
        dropShadowAngle : Math.PI / 6,
        dropShadowDistance : 6,
        wordWrap : true,
        wordWrapWidth : 440
    };

    var style2 = {
        font : 'bold italic 28px Arial',
        fill : '#7ED321',
        stroke : '#4a1850',
        strokeThickness : 5,
        dropShadow : true,
        dropShadowColor : '#000000',
        dropShadowAngle : Math.PI / 6,
        dropShadowDistance : 6,
        wordWrap : true,
        wordWrapWidth : 440
    };

    this.scoreText = new PIXI.Text(0 +' m', style);
    this.scoreText.x = 15;
    this.scoreText.y = GAMEHEIGHT-100;
    stage.addChild(this.scoreText);

    this.bestScoreText = new PIXI.Text(0 +' m', style2);
    this.bestScoreText.x = 15;
    this.bestScoreText.y = GAMEHEIGHT-55;
    stage.addChild(this.bestScoreText);
}

Scoring.prototype.setScore = function(points) {
    this.scoreText.text = Math.round(points)+' m';
}

Scoring.prototype.setBestScore = function(points) {
    this.bestScoreText.text = Math.round(points)+' m';
}
