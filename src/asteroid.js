const MovingObject = require("./moving_object")
const Util = require("./util")



function Asteroid(options){
    
    options.color = "grey"
    options.radius = 10
    options.vel = Util.randomVec(8)
    
    MovingObject.call(this, options);
};

Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Ship) {
        otherObject.relocate()
    }
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;