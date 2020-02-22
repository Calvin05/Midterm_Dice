module objects 
{
    export class Image extends GameObject
    {

        constructor(imagePath:Object = config.Game.ASSETS.getResult("1"), x:number = 0, y:number = 0, isCentered:boolean = true)
        {
            super(imagePath, x, y, isCentered);
        }
        
        protected _checkBounds(): void {
            throw new Error("Method not implemented.");
        }        
        public Start(): void {
            this.name = "Image"
        }
        public Update(): void {
            throw new Error("Method not implemented.");
        }
        public Reset(): void {
            throw new Error("Method not implemented.");
        }


    }
}