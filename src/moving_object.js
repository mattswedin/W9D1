function MovingObject(options){
    // debugger
    this.game = options.game;
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
};



MovingObject.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.arc(...this.pos, this.radius, 0, 2 * Math.PI, true);
    ctx.strokeStyle = this.color;
    ctx.stroke()
    ctx.fillStyle = this.color
    ctx.fill()

};


MovingObject.prototype.move = function(){
    const x = this.vel[0]
    const y = this.vel[1]
    
    this.pos[0] += x;
    this.pos[1] += y;
    this.pos = this.game.wrap(this.pos)
};

MovingObject.prototype.isCollidedWith = function(otherObject){
    const distance = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);
    const radii = this.radius + otherObject.radius;

    return distance < radii;
}

MovingObject.prototype.collideWith = function(otherObject){
    // this.game.remove(this);
    // this.game.remove(otherObject);
}

module.exports = MovingObject;