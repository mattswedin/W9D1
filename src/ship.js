const Util = require("./util.js")

const MovingObject = require("./moving_object");

function Ship(options){

    options.radius = 5;
    options.color = "blue";
    options.vel = [0,0]
    MovingObject.call(this, options);

}

Ship.prototype.relocate = function(){
    this.pos = this.game.randomPosition();
    this.vel = [0,0]
}

Util.inherits(Ship, MovingObject);

module.exports = Ship;