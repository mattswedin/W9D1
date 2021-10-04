const MovingObject = require("./moving_object.js")
window.MovingObject = MovingObject;
const Asteroid = require("./asteroid.js")
window.Asteroid = Asteroid;
const GameView = require("./game_view.js");
const Game = require("./game.js");
window.Game = Game;
window.GameView = GameView;

document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("game-canvas");
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext("2d");
    const game = new Game();
    const gameView = new GameView(ctx, game);
    gameView.start();
})