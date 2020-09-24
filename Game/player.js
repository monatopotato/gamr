class player extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/ship.png");
    }
  
    display() {
      this.body.position.x = mouseX;
  
      super.display();
      
    }
}