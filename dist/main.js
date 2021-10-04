/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\")\n\n\n\nfunction Asteroid(options){\n    \n    options.color = \"grey\"\n    options.radius = 10\n    options.vel = Util.randomVec(8)\n    \n    MovingObject.call(this, options);\n};\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://W9D1/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\n\nfunction Game(){\n\n    this.asteroids = [];\n    this.addAsteroids()\n\n};\n\nGame.DIM_X = 500;\nGame.DIM_Y = 500;\nGame.NUM_ASTEROIDS = 15;\n\nGame.prototype.randomPosition = function(){\n    const x = Math.floor(Math.random() * Game.DIM_X)\n    const y = Math.floor(Math.random() * Game.DIM_Y)\n    return [x, y]\n};\n\nGame.prototype.addAsteroids = function(){\n    for (let index = 0; index < Game.NUM_ASTEROIDS; index++) {\n        // debugger\n        const pos = this.randomPosition()\n        this.asteroids.push(new Asteroid({pos: pos}))\n        \n    }\n};\n\nGame.prototype.moveObjects = function(){\n    this.asteroids.forEach(asteroid => {\n        asteroid.move();\n    })\n}\n\nGame.prototype.draw = function(ctx){\n    ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y);\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.asteroids.forEach(asteroid => {\n        asteroid.draw(ctx);\n    })\n};\n\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://W9D1/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction GameView(ctx, game){\n    this.ctx = ctx;\n    this.game = game;\n}\n\nGameView.prototype.start = function(){\n    let that = this\n    setInterval(function(){\n        debugger\n        that.game.moveObjects(that.ctx);\n        that.game.draw(that.ctx);\n    }, 20)\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack://W9D1/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nwindow.MovingObject = MovingObject;\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\nwindow.Asteroid = Asteroid;\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nwindow.Game = Game;\nwindow.GameView = GameView;\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n    const canvas = document.getElementById(\"game-canvas\");\n    canvas.width = 500;\n    canvas.height = 500;\n    const ctx = canvas.getContext(\"2d\");\n    const game = new Game();\n    const gameView = new GameView(ctx, game);\n    gameView.start();\n})\n\n//# sourceURL=webpack://W9D1/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options){\n    // debugger\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n};\n\n\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.beginPath();\n    ctx.arc(...this.pos, this.radius, 0, 2 * Math.PI, true);\n    ctx.strokeStyle = this.color;\n    ctx.stroke()\n    ctx.fillStyle = this.color\n    ctx.fill()\n\n};\n\n\nMovingObject.prototype.move = function(){\n    this.pos += this.vel;\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://W9D1/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack://W9D1/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;