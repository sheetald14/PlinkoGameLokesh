const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var particle=[];
var Plinkos=[];

var Divisions1=[];

var divisionHeight=250;

var engine, world;
var ground;
var divisions;
var particles;
var plinkos;


function setup() {
  createCanvas(565,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,660,1200,20);
   
  
 for (var j = 75; j <=width; j=j+50){
  Plinkos.push(new Plinko(j,75));
  }
  
 

}


function draw() {
  background(0); 
  Engine.update(engine); 
  ground.display(); 
 

 
height=660;
 for(var k = 0; k <=width;k = k + 80){
    Divisions1.push(divisions=new Divisions(k,height-(divisionHeight/2),10,divisionHeight));
    divisions.display();
 }


 
 for(var j = 0; j <=Plinkos.length;j++){
  Plinkos[j].display();
 }


 /*if (frameCount %60 ===0)
 {
   particle.push(particles = new Particles(random(width/2-10,width/2+10),10,10));
   particles.displa
 }

 for (var j=0;j <particle.length; j++)
 {
   particle[j].display();
 }*/
 //drawSprites();
 
 



 /*if(frameCount%60===0){
   particle.push(new Particles(random(width/2-10),10,10));

 }

 for (var j = 0; j < particle.length; j++){
   particle[j].display();
 }*/
 








  
   
  
 
}

  
 