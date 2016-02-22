function Panel(){
    this.addPanel();
}

Panel.prototype.addPanel = function() {

    var panel = new MovingItem('start.png');
    panel.position.x = 0;
    panel.position.y = 0;
    panel.alpha = 0.2;
    var panelAlpha = panel.alpha;
    stage.addChild(panel);


    var coords = { x: 0, y: 0 };
    var tween = new TWEEN.Tween(coords)
        .to({ x: 0, y: 1 }, 1000)
        .onUpdate(function() {
            panel.alpha = this.y;
            renderer.render(stage);
        })
        .start();

    requestAnimationFrame(animate);

    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }

    this.removePanel = function() {
        stage.removeChild(panel);
    }
};
