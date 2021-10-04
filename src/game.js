const Asteroid = require("./asteroid");


function Game(){

    this.asteroids = [];
    this.addAsteroids()

};

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 15;

Game.prototype.randomPosition = function(){
    const x = Math.floor(Math.random() * Game.DIM_X)
    const y = Math.floor(Math.random() * Game.DIM_Y)
    return [x, y]
};

Game.prototype.addAsteroids = function(){
    for (let index = 0; index < Game.NUM_ASTEROIDS; index++) {
        // debugger
        const pos = this.randomPosition()
        this.asteroids.push(new Asteroid({pos: pos}))
        
    }
};

Game.prototype.moveObjects = function(){
    this.asteroids.forEach(asteroid => {
        asteroid.move();
    })
}

Game.prototype.draw = function(ctx){
    ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(asteroid => {
        asteroid.draw(ctx);
    })
};



module.exports = Game;