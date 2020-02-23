module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _rollButton:objects.Button;
        private _firstDice:objects.Image;
        private _secondDice:objects.Image;
        private _thirdDice:objects.Image;
        private _fourthDice:objects.Image;
        private _firstLabel:objects.Label;
        private _secondLabel:objects.Label;
        private _thirdLabel:objects.Label;
        private _fourthLabel:objects.Label;
        private _total:objects.Label;
       

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        // Initializing and Instantiating
        public Start(): void 
        {
             this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
             this._firstDice = new objects.Image(config.Game.ASSETS.getResult("1"), 180, 100, true);
             this._secondDice = new objects.Image(config.Game.ASSETS.getResult("2"), 480, 100, true);
             this._thirdDice = new objects.Image(config.Game.ASSETS.getResult("3"), 180, 300, true);
             this._fourthDice = new objects.Image(config.Game.ASSETS.getResult("4"), 480, 300, true);
             this._firstLabel = new objects.Label("1", "18px", "Arial", "black",180, 175, true); 
             this._secondLabel = new objects.Label("2", "18px", "Arial", "black",480, 175, true);
             this._thirdLabel = new objects.Label("3", "18px", "Arial", "black",180, 370, true);
             this._fourthLabel = new objects.Label("4", "18px", "Arial", "black",480, 370, true); 
             this._total = new objects.Label(" ", "18px", "Arial", "black",320, 370, true);
            
             this._firstDice.scaleX = 0.5;
             this._firstDice.scaleY = 0.5;

             this._secondDice.scaleX = 0.5;
             this._secondDice.scaleY = 0.5;

             this._thirdDice.scaleX = 0.5;
             this._thirdDice.scaleY = 0.5;

             this._fourthDice.scaleX = 0.5;
             this._fourthDice.scaleY = 0.5;
             this.Main();
        }        
        
        public Update(): void 
        {
           
        }
        
        public Main(): void 
        {
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

            this._rollButton.addEventListener("click", ()=> {

                let i1 = new Image();
                let i2 = new Image();
                let i3 = new Image();
                let i4 = new Image();


                let firstValue = Math.floor(Math.random() * 6 + 1);
                let secondValue = Math.floor(Math.random() * 6 + 1);
                let thirdValue = Math.floor(Math.random() * 6 + 1);
                let fourthdValue = Math.floor(Math.random() * 6 + 1);
                let path1 = getImage(firstValue);
                let path2 = getImage(secondValue);
                let path3 = getImage(thirdValue);
                let path4 = getImage(fourthdValue);


                i1.src = path1;
                i2.src = path2;
                i3.src = path3;
                i4.src = path4;

                // set images for dice Image
                this._firstDice.image = i1;
                this._secondDice.image = i2;
                this._thirdDice.image = i3;
                this._fourthDice.image = i4;


                // Set value for label based on the number on the dice
                this._firstLabel.text = String(firstValue);
                this._secondLabel.text = String(secondValue);
                this._thirdLabel.text = String(thirdValue);
                this._fourthLabel.text = String(fourthdValue);
                this._total.textAlign = "center";
                this._total.text = "Total: " + String(Total(firstValue,secondValue,thirdValue,fourthdValue));

                var sound = document.createElement("audio");
                sound.src = "./Assets/audio/sound.mp3";
                sound.play();
                console.log(firstValue, secondValue);

            });

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

            function Total(v1:number, v2:number, v3: number, v4:number):number{
                let arr:number[] = [v1,v2,v3,v4];
                arr.sort();
                return arr[1] + arr[2] + arr[3];
            }

        

        }
        
    }
}