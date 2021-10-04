const Asteroid = require("./asteroid");
const Ship = require("./ship");


function Game(){

    this.ship = new Ship({pos: this.randomPosition, game: this})

    this.asteroids = [];
    this.addAsteroids()

};

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 4;

Game.prototype.randomPosition = function(){
    const x = Math.floor(Math.random() * Game.DIM_X)
    const y = Math.floor(Math.random() * Game.DIM_Y)
    return [x, y]
};

Game.prototype.addAsteroids = function(){

    for (let index = 0; index < Game.NUM_ASTEROIDS; index++) {
        // debugger
        const pos = this.randomPosition()
        this.asteroids.push(new Asteroid({pos: pos, game: this}))
        
    }
};

Game.prototype.moveObjects = function(){
    this.allObjects().forEach(object => {
        object.move();
    })
}

Game.prototype.draw = function(ctx){
    ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(object => {
        object.draw(ctx);
    })
};

Game.prototype.wrap = function(pos){

    if (pos[0] <= 0){
        pos[0] = 500;
    } else if (pos[0] >= 500){
        pos[0] = 0
    };

    if (pos[1] <= 0){
        pos[1] = 500;
    } else if (pos[1] >= 500){
        pos[1] = 0
    };

    return pos;
}

Game.prototype.checkCollisions = function(){
    for (let i = 0; i < this.allObjects().length; i++) {
        for (let j = 0; j < this.allObjects().length; j++) {
            if (i < j){
                if(this.allObjects()[i].isCollidedWith(this.allObjects()[j])){
                    alert("Collision");
                    this.allObjects()[i].collideWith(this.allObjects()[j])

                } 
            }
            
        }
        
    }
}

Game.prototype.step = function(ctx){
    this.moveObjects(ctx);
    this.checkCollisions();
}

Game.prototype.remove = function(asteroid){
    const idx = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(idx, 1);
}

Game.prototype.allObjects = function(){
    return this.asteroids.concat(this.ship);
}

module.exports = Game;