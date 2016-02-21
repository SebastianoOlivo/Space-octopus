function keyboard(keyCode) {
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
            console.log('ease elem');
            stage.children[6].position.x -= 12;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    function easeRight() {
        move = true;
        function animation() {
            console.log('ease elem');
            stage.children[6].position.x += 12;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    function easeTop() {
        move = true;
        function animation() {
            console.log('ease elem');
            stage.children[6].position.y -= 12;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    function easeBottom() {
        move = true;
        function animation() {
            console.log('ease elem');
            stage.children[6].position.y += 12;
            if(move) {
                requestAnimationFrame(animation);
            }
        }

        animation();
    }

    key.downHandler = function(event) {
        console.log(event.keyCode);
        if (event.keyCode === key.code) {
            if (key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
        }

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
    window.addEventListener(
        "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
        "keyup", key.upHandler.bind(key), false
    );
    return key;
}
