function Keyboard(keyCode) {
    var key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    var move = false;
    //The `downHandler`
    function easeLeft() {
        move = true;
        stage.children[7].skew.x = -0.2;
        stage.children[7].scale.y = 0.55;
        function animation() {
            stage.children[7].position.x -= 7;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    function easeRight() {
        move = true;
        stage.children[7].skew.x = 0.2;
        stage.children[7].scale.y = 0.55;
        function animation() {
            stage.children[7].position.x += 7;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    function easeTop() {
        move = true;
        stage.children[7].scale.y = 0.7;
        function animation() {
            stage.children[7].position.y -= 7;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    function easeBottom() {
        move = true;
        stage.children[7].scale.y = 0.5;
        function animation() {
            stage.children[7].position.y += 7;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    key.downHandler = function(event) {
        if (event.keyCode === 37) {
            easeLeft();
        }

        if (event.keyCode === 39) {
            easeRight();
        }

        if (event.keyCode === 38) {
            easeTop();
        }

        if (event.keyCode === 40) {
            easeBottom();
        }
        event.preventDefault();
    };

    //The `upHandler`
    key.upHandler = function(event) { 
        move = false;
        stage.children[7].skew.x = 0;
        stage.children[7].scale.y = 0.6;
        event.preventDefault();
    };

    //Attach event listeners

    if(!activeListeners) {
        window.addEventListener(
            "keydown", key.downHandler.bind(key), false
        );
        window.addEventListener(
            "keyup", key.upHandler.bind(key), false
        );
        activeListeners = true;
    }


    return key;
}
