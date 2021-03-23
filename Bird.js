class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajacteory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y];
      this.trajacteory.push(position);
    }
    for(var i=0;i<this.trajacteory.length;i++){
      image(this.smokeImage,this.trajacteory[i][0],this.trajacteory[i][1])


    }
  }
}
