const Game = require("./game.js")

function GameView(ctx, game){
    this.ctx = ctx;
    this.game = game;
}

GameView.prototype.start = function(){
    let that = this
    setInterval(function(){
        
        that.game.step(that.ctx);
        that.game.draw(that.ctx);
    }, 20)
}

module.exports = GameView;