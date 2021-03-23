










const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1 ;
var box2, box3, box4,box5,box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15;
var backgroundImg,platform;
var bird, slingshot1;

var ball;
var stand1, stand2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    stand1 = new Stand(390,300,300,10);
    stand2 = new Stand(700,200,200,10);
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    

    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    
    box5 = new Box(420,275,30,40);
    
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
//level 2
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    

    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    
    box12 = new Box(450,235,30,40);
    //level three
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  //top
  box16 = new Box(390,155,30,40);



  
  //set 2 for second stand
  //level one
  blocks1 = new Box(640,175,30,40);
  blocks2 = new Box(670,175,30,40);
  blocks3 = new Box(700,175,30,40);
  blocks4 = new Box(730,175,30,40);
  blocks5 = new Box(760,175,30,40);
  //level two
  blocks6 = new Box(670,135,30,40);
  blocks7 = new Box(700,135,30,40);
  blocks8 = new Box(730,135,30,40);
  //top
  blocks9 = new Box(700,95,30,40);

    fill("white");
  ball = Bodies.circle(50,200,20);

  World.add(world,ball);
  slingshot1 = new SlingShot(this.ball,{x:100,y:200});
    //box5 = new Box(450,235,30,40);

    //log6 = new Log(230,180,80, PI/2);
    //slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("white");
    Engine.update(engine);
    stand1.display();
    stand2.display();
    //strokeWeight(4);
    fill("pink");
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
   

    box5.display();
    box6.display();
    box7.display();

    fill("green");
    box8.display();
    box9.display();
   

    box10.display();
    box11.display();
    box12.display();;
    box13.display();
    fill("purple");
    box14.display();
    box15.display();
    box16.display();

    //box14.display();
    blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
    fill("gold");
    ellipseMode(CENTER);

    ellipse(ball.position.x,ball.position.y,40,40);
  slingshot1.display();

    //box10.display();
    //box11.display();
    //bird.display();
   //platform.display();
    //log6.display();
    //slingshot.display();    
}

function mouseDragged(){
    
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
    

    }


function mouseReleased(){
    slingshot1.fly();


    
}

function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}
