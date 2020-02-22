"use strict";
/*
Viet Cuong Nguyen
Dice Roll Game
Feb 22, 2020
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Play.prototype, "firstDice", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._firstDice;
            },
            set: function (dice) {
                this._firstDice = dice;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Play.prototype, "secondDice", {
            get: function () {
                return this._secondDice;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this._firstDice = new objects.Image(config.Game.ASSETS.getResult("1"), 190, 200, true);
            this._secondDice = new objects.Image(config.Game.ASSETS.getResult("2"), 460, 200, true);
            this._firstLabel = new objects.Label(" ", "18px", "Arial", "black", 190, 320, true);
            this._secondLabel = new objects.Label(" ", "18px", "Arial", "black", 460, 320, true);
            this._total = new objects.Label(" ", "18px", "Arial", "black", 320, 370, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._firstDice);
            this.addChild(this._secondDice);
            this.addChild(this._rollButton);
            this.addChild(this._firstLabel);
            this.addChild(this._secondLabel);
            this.addChild(this._total);
            this._rollButton.addEventListener("click", function () {
                var i1 = new Image();
                var i2 = new Image();
                var firstValue = Math.floor(Math.random() * 6 + 1);
                var secondValue = Math.floor(Math.random() * 6 + 1);
                var path1 = getImage(firstValue);
                var path2 = getImage(secondValue);
                i1.src = path1;
                i2.src = path2;
                // set images for dice Image
                _this._firstDice.image = i1;
                _this._secondDice.image = i2;
                // Set value for label based on the number on the dice
                _this._firstLabel.text = String(firstValue);
                _this._secondLabel.text = String(secondValue);
                _this._total.textAlign = "center";
                _this._total.text = "Total: " + String(firstValue + secondValue);
                var sound = document.createElement("audio");
                sound.src = "./Assets/audio/sound.mp3";
                sound.play();
                console.log(firstValue, secondValue);
            });
            // get an image path based on the number on the dice
            function getImage(value) {
                var slotName;
                switch (value) {
                    case 1:
                        slotName = "./Assets/images/1.png";
                        break;
                    case 2:
                        slotName = "./Assets/images/2.png";
                        break;
                    case 3:
                        slotName = "./Assets/images/3.png";
                        break;
                    case 4:
                        slotName = "./Assets/images/4.png";
                        break;
                    case 5:
                        slotName = "./Assets/images/5.png";
                        break;
                    case 6:
                        slotName = "./Assets/images/6.png";
                        break;
                    default:
                        slotName = "./Assets/images/1.png";
                }
                return slotName;
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map