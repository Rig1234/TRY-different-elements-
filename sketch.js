const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
    stone1 = new Stone(600,580,100,100);

    iron1 = new Iron(500,580,50,50);
    
    rubber1 = new Rubber(200,590,50);

    titatium1 = new Titatium(400,590,80,80);
   
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    iron1.display();
    rubber1.display();
    titatium1.display();
    

    
 
}