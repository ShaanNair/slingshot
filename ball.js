class Ball extends Base {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("assets/ball.png");
      this.pathImage = loadImage("assets/path.png");
      this.trajectory =[];
    }
  
    display() {
      
  
      super.display();
  
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
  
      for(var i=0; i<this.trajectory.length; i++){
        image(this.pathImage, this.trajectory[i][0], this.trajectory[i][1]);
      }
    }
  }
  