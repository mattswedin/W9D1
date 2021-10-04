function MovingObject(options){
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

module.exports = MovingObject;

MovingObject.prototype.move = function(){
    this.pos += this.vel;
}