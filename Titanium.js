class Titatium {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.1,
          'friction':100,
          'density':150
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("orange");
      stroke("black")
      strokeWeight(5);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  