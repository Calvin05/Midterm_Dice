"use strict";
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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        // Initializing and Instantiating
        End.prototype.Start = function () {
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this._firstDice = new objects.Image(config.Game.ASSETS.getResult("1"), 180, 100, true);
            this._secondDice = new objects.Image(config.Game.ASSETS.getResult("2"), 480, 100, true);
            this._thirdDice = new objects.Image(config.Game.ASSETS.getResult("3"), 180, 300, true);
            this._fourthDice = new objects.Image(config.Game.ASSETS.getResult("4"), 480, 300, true);
            this._firstLabel = new objects.Label("1", "18px", "Arial", "black", 180, 175, true);
            this._secondLabel = new objects.Label("2", "18px", "Arial", "black", 480, 175, true);
            this._thirdLabel = new objects.Label("3", "18px", "Arial", "black", 180, 370, true);
            this._fourthLabel = new objects.Label("4", "18px", "Arial", "black", 480, 370, true);
            this._total = new objects.Label(" ", "18px", "Arial", "black", 320, 370, true);
            this._firstDice.scaleX = 0.5;
            this._firstDice.scaleY = 0.5;
            this._secondDice.scaleX = 0.5;
            this._secondDice.scaleY = 0.5;
            this._thirdDice.scaleX = 0.5;
            this._thirdDice.scaleY = 0.5;
            this._fourthDice.scaleX = 0.5;
            this._fourthDice.scaleY = 0.5;
            this.Main();
        };
        End.prototype.Update = function () {
        };
        End.prototype.Main = function () {
            var _this = this;
            this.addChild(this._firstDice);
            this.addChild(this._secondDice);
            this.addChild(this._thirdDice);
            this.addChild(this._fourthDice);
            this.addChild(this._rollButton);
            this.addChild(this._firstLabel);
            this.addChild(this._secondLabel);
            this.addChild(this._thirdLabel);
            this.addChild(this._fourthLabel);
            this.addChild(this._total);
            this._rollButton.addEventListener("click", function () {
                var i1 = new Image();
                var i2 = new Image();
                var i3 = new Image();
                var i4 = new Image();
                var firstValue = Math.floor(Math.random() * 6 + 1);
                var secondValue = Math.floor(Math.random() * 6 + 1);
                var thirdValue = Math.floor(Math.random() * 6 + 1);
                var fourthdValue = Math.floor(Math.random() * 6 + 1);
                var path1 = getImage(firstValue);
                var path2 = getImage(secondValue);
                var path3 = getImage(thirdValue);
                var path4 = getImage(fourthdValue);
                i1.src = path1;
                i2.src = path2;
                i3.src = path3;
                i4.src = path4;
                // set images for dice Image
                _this._firstDice.image = i1;
                _this._secondDice.image = i2;
                _this._thirdDice.image = i3;
                _this._fourthDice.image = i4;
                // Set value for label based on the number on the dice
                _this._firstLabel.text = String(firstValue);
                _this._secondLabel.text = String(secondValue);
                _this._thirdLabel.text = String(thirdValue);
                _this._fourthLabel.text = String(fourthdValue);
                _this._total.textAlign = "center";
                _this._total.text = "Total: " + String(Total(firstValue, secondValue, thirdValue, fourthdValue));
                var sound = document.createElement("audio");
                sound.src = "./Assets/audio/sound.mp3";
                sound.play();
                console.log(firstValue, secondValue);
            });
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
            function Total(v1, v2, v3, v4) {
                var arr = [v1, v2, v3, v4];
                arr.sort();
                return arr[1] + arr[2] + arr[3];
            }
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=End.js.map