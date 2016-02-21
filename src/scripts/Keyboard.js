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
        function animation() {
            stage.children[7].position.x -= 10;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    function easeRight() {
        move = true;
        function animation() {
            stage.children[7].position.x += 10;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    function easeTop() {
        move = true;
        function animation() {
            stage.children[7].position.y -= 10;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    function easeBottom() {
        move = true;
        function animation() {
            stage.children[7].position.y += 10;
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
        if (event.keyCode === key.code) {
            if (key.isDown && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
        }
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
