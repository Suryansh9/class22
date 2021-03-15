const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball;
var ground;

function setup() {
  createCanvas(800,400);

  //engine will be created 
  engine = Engine.create();

  //connection between the world and engine
  world = engine.world;


//property for our object
  var ball_option = {
      restitution : 1.5
  }
  var ground_option = {
    isStatic:true
  }

  //create a ball 
  ball = Bodies.rectangle(100,300,20,20,ball_option);
  //Add this ball to the world and engine also to the world
  World.add(world,ball);
  ground = Bodies.rectangle(0,380,1600,30,ground_option)
  World.add(world,ground)

  console.log(ball);

  
}

function draw() {
  background("black");  

  Engine.update(engine);

  //rect(200,200,20,20);
  rect(ball.position.x,ball.position.y,20,20);
  rect(ground.position.x,ground.position.y,1600,30);

  drawSprites();
}