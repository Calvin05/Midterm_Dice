/*
Viet Cuong Nguyen
Dice Roll Game
Feb 22, 2020
*/

module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _rollButton:objects.Button;
        private _firstDice:objects.Image;
        private _secondDice:objects.Image;
        private _firstLabel:objects.Label;
        private _secondLabel:objects.Label;
        private _total:objects.Label;
        private _endButton:objects.Button;
        // PUBLIC PROPERTIES

        get firstDice():objects.Image
        {
            return this._firstDice;
        }
        get secondDice():objects.Image
        {
            return this._secondDice;
        }

        set firstDice(dice:objects.Image) {
            this._firstDice = dice;
        }

        // CONSTRUCTOR
        constructor()
        {
            super();
            this.Start();
        }

        // PRIVATE METHODS
        
        // PUBLIC METHODS
        
        //initialize and instatiate
        public Start(): void 
        {
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this._firstDice = new objects.Image(config.Game.ASSETS.getResult("1"), 190, 200, true);
            this._secondDice = new objects.Image(config.Game.ASSETS.getResult("2"), 460, 200, true);
            this._firstLabel = new objects.Label(" ", "18px", "Arial", "black",190, 320, true); 
            this._secondLabel = new objects.Label(" ", "18px", "Arial", "black",460, 320, true); 
            this._total = new objects.Label(" ", "18px", "Arial", "black",320, 370, true); 
            this._endButton = new objects.Button(config.Game.ASSETS.getResult("nextButton"), 520, 430, true);
            // this._firstDice.scaleX = 0.5;
            // this._firstDice.scaleY = 0.5;
            this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {
            this.addChild(this._firstDice);
            this.addChild(this._secondDice);
            this.addChild(this._rollButton);
            this.addChild(this._firstLabel);
            this.addChild(this._secondLabel);
            this.addChild(this._total);
            this.addChild(this._endButton);

            this._endButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.END;
            });
            
            this._rollButton.addEventListener("click", ()=> {

                let i1 = new Image();
                let i2 = new Image();

                let firstValue = Math.floor(Math.random() * 6 + 1);
                let secondValue = Math.floor(Math.random() * 6 + 1);
                let path1 = getImage(firstValue);
                let path2 = getImage(secondValue);


                i1.src = path1;
                i2.src = path2;

                // set images for dice Image
                this._firstDice.image = i1;
                this._secondDice.image = i2;

                // Set value for label based on the number on the dice
                this._firstLabel.text = String(firstValue);
                this._secondLabel.text = String(secondValue);
                this._total.textAlign = "center";
                this._total.text = "Total: " + String(firstValue+secondValue);

                var sound = document.createElement("audio");
                sound.src = "./Assets/audio/sound.mp3";
                sound.play();
                console.log(firstValue, secondValue);

            });

            // get an image path based on the number on the dice
            function getImage(value:number) {
                let slotName:string;
                switch(value) {
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

        }
        
    }
    
}