class Bird  {
  constructor(x,y){
    var options = {
      'restitution':0.5,
     'frictionAir':0.001
      }
  this.body = Bodies.circle(x, y, 25, options);
  Matter.Body.setMass(this.body, this.body.mass * 6);
  World.add(world,this.body);
 
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    }

  display() {

    
    push();
    
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
  
    if(this.body.velocity.x > 10 && this.body.position.x > 200 &&!mouseIsPressed){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
