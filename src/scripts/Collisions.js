 function Collisions(elem1, elem1X, elem1Y, elem2) {

    var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    //hit will determine whether there's a collision
    hit = false;

    //Find the center points of each sprite
    elem1.centerX = elem1X + elem1.width / 2;
    elem1.centerY = elem1Y.y + elem1.height / 2;
    elem2.centerX = elem2.x + elem2.width / 2;
    elem2.centerY = elem2.y + elem2.height / 2;

    //Find the half-widths and half-heights of each sprite
    elem1.halfWidth = elem1.width / 2;
    elem1.halfHeight = elem1.height / 2;
    elem2.halfWidth = elem2.width / 2;
    elem2.halfHeight = elem2.height / 2;

    //Calculate the distance vector between the sprites
    vx = elem1.centerX - elem2.centerX;
    vy = elem1.centerY - elem2.centerY;

    //Figure out the combined half-widths and half-heights
    combinedHalfWidths = elem1.halfWidth + elem2.halfWidth;
    combinedHalfHeights = elem1.halfHeight + elem2.halfHeight;

    //Check for a collision on the x axis
    if (Math.abs(vx) < combinedHalfWidths) {

        //A collision might be occuring. Check for a collision on the y axis
        if (Math.abs(vy) < combinedHalfHeights) {

            //There's definitely a collision happening
            hit = true;
        } else {

            //There's no collision on the y axis
            hit = false;
        }
    } else {

        //There's no collision on the x axis
        hit = false;
    }

    //`hit` will be either `true` or `false`
    return hit;


};
