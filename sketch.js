const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {

}

function setup(){
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    // last layer of the first pyramid

      block1 = new Box4(600, 260, 30, 40);
      block2 = new Box4(570, 260, 30, 40);
      block3 = new Box4(540, 260, 30, 40);
      block4 = new Box4(630, 260, 30, 40);
      block5 = new Box4(660, 260, 30, 40);
  
 // second last layer of the first pyramid
      block6 = new Box3(585, 220, 30, 40);
      block7 = new Box3(555, 220, 30, 40);
      block8 = new Box3(615, 220, 30, 40);
      block9 = new Box3(645, 220, 30, 40);
  
  //third  last layer of the first pyramid
     block10 = new Box1(600, 170, 30, 40);
     block11 = new Box1(570, 180, 30, 40);
     block12 = new Box1(630, 180, 30, 40);
  
  //top block of the first  pyramid
     block13 = new Box2(600, 140, 30, 40);
  
  
   // behind pyramid last line
    block14 = new Box4(900, 170, 30, 40);
    block15 = new Box4(930, 170, 30, 40);
    block16 = new Box4(870, 170, 30, 40);
    block17 = new Box4(840, 170, 30, 40);
    block18 = new Box4(960, 170, 30, 40);
  
//seoncd last layer of the behind pyramid;
     block19 = new Box3(900, 140, 30, 40);
     block20 = new Box3(930, 140, 30, 40);
     block21 = new Box3(870, 140, 30, 40);
  //top block of the behinf pyramid
      block22 = new Box1(900, 110, 30, 40);

    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(600,280,200,10);
    ground2 = new Ground(900,200,200,10)
   

    bird = new Bird(200,205);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:200});
}

function draw(){
    background(183, 255, 3);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    ground1.display();
    ground2.display();
    fill("red")
      block1.display();

      block2.display();

      block3.display();

      block4.display();

      block5.display();

     block6.display();

     block7.display();

     block8.display();

     block9.display();

    
     block10.display();

     block11.display();

     block12.display();

    block13.display();

    block14.display();

    block15.display();

    block16.display();

    block17.display();

    block18.display();

     block19.display();

      block20.display();

      block21.display();

      block22.display();


   

    bird.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
    
    slingshot.fly();
}

 function keyPressed(){    
      if(keyCode === 32){
        slingshot.attach(bird.body);    
     }
}